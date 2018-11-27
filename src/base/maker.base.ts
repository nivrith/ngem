import {Command} from '@oclif/command'
import * as Case from 'case'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {mkdirSync, readFileSync, writeFileSync} from 'fs'
import {existsSync, readJSON} from 'fs-extra'
import {compile} from 'handlebars'
import * as cli from 'inquirer'
import * as notifier from 'node-notifier'
import open = require('opn')
import * as path from 'path'
import {cwd} from 'process'

import {ArtifactName} from '../classes/artifact-name.class'

import {MakeType} from './../enums/make-type.enum'
import {NgemConfig} from './../models/ngem-config.model'
import {WriteFileConfig} from './../models/write-file-config.model'
const findRoot = require('find-root')
const yn = require('yn')
// src/base.ts

export default abstract class Maker extends Command {
  public static ngemConfig: NgemConfig
  protected static CONFIG_FILENAME = 'ngem.json'
  protected static DEFAULT_CONFIG_FILENAME = 'ngem.default.json'
  protected static DEFAULT_TEMPLATE_PATH = '../commands/make/templates'
  protected static TEMPLATE_EXTENTION = '.hbs'

  public root = ''
  protected notifier = notifier

  async init() {
    // do some initialization
    await this.printAscii()
    this.root = await this.findDir()
    Maker.ngemConfig = await this.getConfig()
  }

  async getConfig(): Promise<NgemConfig> {
    if (this.root) {
      try {
        const ngemDir = await this.findDir(Maker.CONFIG_FILENAME)
        return readJSON(path.join(ngemDir, 'ngem.json'))
      } catch {
        return readJSON(path.join(__dirname, `../${Maker.DEFAULT_CONFIG_FILENAME}`))
      }
    } else {
      return readJSON(path.join(__dirname, '../ngem.default.json'))
    }
  }

  async findDir(fileName = 'package.json'): Promise<string> {
    const root = await findRoot(cwd(), function (dir: string) {
      return existsSync(path.resolve(dir, fileName))
    })
    return root
  }

  async getTemplate(name: MakeType): Promise<Handlebars.TemplateDelegate<any>> {
    const dir = __dirname
    const tpl = Maker.ngemConfig.angularjs.templatesDir
    const defaultTpl = Maker.DEFAULT_TEMPLATE_PATH
    const ext = Maker.TEMPLATE_EXTENTION
    const filename = name.toLowerCase() + ext
    let src: string
    let templateSource: string
    try {
      src = path.join(this.root, tpl , filename)
      templateSource = readFileSync(src, 'utf8').toString()

    } catch {
      src = path.join(dir, defaultTpl , filename)
      templateSource = readFileSync(src, 'utf8').toString()
    }
    const template = compile(templateSource)
    return template
  }

  async makeContent(template: Handlebars.TemplateDelegate<any>, args: any, flags: any): Promise<string> {
    const content = template({
      name: await this.artifactName(args.name),
      module: flags.module || Maker.ngemConfig.defaultModule || 'module'
    })

    return content
  }

  async writeFile(config: WriteFileConfig) {
    const CURR_DIR = cwd()
    const name = config.args.name
    const dirArr: string[] = [CURR_DIR, name]
    const filetype = config.fileType
    const templateType = config.templateType.toLocaleLowerCase()
    const filename = `.${templateType + filetype}`
    let writePath: string
    // const name = flags.name || 'world'
    if (!(config.flags.flat || config.flat)) {
      dirArr.push(filename)
      writePath = `${CURR_DIR}/${Case.pascal(name)}/${Case.kebab(name)}${filename}`
      try {
        mkdirSync(`${CURR_DIR}/${name}`)
      } catch (err) {
        if (err && err.code === 'EEXIST') {
          this.logWarning('Directory exists')
          const userInput = await this.confirm('Are you sure you want to overwrite existing files?')
          if (!userInput.confirmation) {
            this.logError('Exiting Ngem cli')
            this.exit(1)
          }
        }
      }
    } else {
      writePath = `${CURR_DIR}/${Case.kebab(name)}.${templateType + filetype}`
    }

    writeFileSync(writePath, config.content, 'utf8')
    this.log(chalk.green(`${config.templateType} Generated!`))
    this.notifier.notify({
      title: `${config.templateType} Generated`,
      message: 'CREATE: ' + writePath,
      icon: path.join(__dirname, '../../img/cli.png')
    })

    if (config.flags.open) {
      open(writePath, {wait: false})
        .then(() =>
        this.log('then'))
        .catch((e: any) =>
        this.log('catch', e))
    }
  }

  async printAscii(): Promise<void> {
    this.log(
      chalk.red(
        figlet.textSync('Ngem', {horizontalLayout: 'full'})
      )
    )
  }

  async logSuccess(...args: string[]): Promise<void> {
    this.log(chalk.green(...args))
  }

  async logInfo(...args: string[]): Promise<void> {
    this.log(chalk.blue(...args))
  }

  async logWarning(...args: string[]): Promise<void> {
    this.warn(chalk.yellow(...args))
  }

  async logError(...args: string[]): Promise<void> {
    this.log(chalk.red(...args))
  }

  async confirm(question: string, base = false): Promise<{confirmation: string}> {
    let questionArr = [{
      name: 'confirmation',
      type: 'confirm',
      message: question,
      default: base,
      validate(answer: string) {
        if (yn(answer)) {
          return true
        } else {
          return 'You must enter a Yes/No value (Yy/Nn)'
        }
      }
    }]

    let result = await cli.prompt<{confirmation: string}>(questionArr)

    return result
  }

  async artifactName(name: string): Promise<ArtifactName> {
    let result = new ArtifactName(name)
    return result
  }
  async catch(err: Error) {
    // handle any error from the command
    this.error(err)
  }
  async finally(err: Error) {
    // called after run and catch regardless of whether or not the command errored
    if (err) {
      this.error(err)
    }
  }

}
