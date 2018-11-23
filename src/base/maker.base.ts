import {Command} from '@oclif/command'
import * as Case from 'case'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {mkdirSync, readFileSync, writeFileSync} from 'fs'
import {existsSync, readJSON} from 'fs-extra'
import {compile} from 'handlebars'
import * as notifier from 'node-notifier'
import open = require('opn')
// import {compile} from 'handlebars'
// import * as notifier from 'node-notifier'
// import open = require('opn')
import * as path from 'path'
import {cwd} from 'process'

import {MakeType} from './../enums/make-type.enum'
import {NgemConfig} from './../models/ngem-config.model'
import {WriteFileConfig} from './../models/write-file-config.model'
const findRoot = require('find-root')

// src/base.ts

export default abstract class Maker extends Command {
  public static ngemConfig: NgemConfig
  protected static CONFIG_FILENAME = 'ngem.json'
  protected static DEFAULT_CONFIG_FILENAME = 'ngem.default.json'
  protected static TEMPLATE_EXTENTION = '.hbs'

  public root = ''
  public artifactName = ''
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
    const ext = Maker.TEMPLATE_EXTENTION
    const filename = name.toLowerCase()

    const src: string = path.join(dir, tpl , filename , ext)

    const source = readFileSync(src, 'utf8').toString()
    const template = compile(source)
    return template
  }

  async makeContent(template: Handlebars.TemplateDelegate<any>, args: any, flags: any): Promise<string> {
    const content = template({
      name: Case.camel(args.name),
      pascalName: Case.pascal(args.name),
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
    if (!config.flags.flat) {
      dirArr.push(filename)
      writePath = `${CURR_DIR}/${Case.pascal(name)}/${Case.snake(name)}${filename}`
      try {
        mkdirSync(`${CURR_DIR}/${name}`)
      } catch (err) {
        if (err && err.code === 'EEXIST') {
          this.warn('Directory exists')
        }
        // this.error(err, {code: '1', exit: 1})
      }
    } else {
      writePath = `${CURR_DIR}/${Case.snake(name)}.${templateType + filetype}`
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
    this.log(chalk.yellow(...args))
  }

  async logError(...args: string[]): Promise<void> {
    this.log(chalk.red(...args))
  }
  // async writeDir() {
  //   const __DIRNAME = __dirname
  //   const CURR_DIR = cwd()
  //   this.log(chalk.blue('Component Generating...'))
  //   const source = readFileSync(pathJoin(__DIRNAME, 'templates/component.hbs'), 'utf8').toString()
  //   const template = compile(source)
  //   const content = template({
  //     name: Case.camel(args.name),
  //     pascalName: Case.pascal(args.name),
  //     module: flags.module || 'module'
  //   })
  // }

  async catch(err: Error) {
    // handle any error from the command
    this.error(err)
  }
  async finally(err: Error) {
    // called after run and catch regardless of whether or not the command errored
    this.error(err)
  }

}
