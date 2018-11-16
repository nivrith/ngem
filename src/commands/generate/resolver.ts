import {Command, flags} from '@oclif/command'
import * as Case from 'case'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {readFileSync, writeFileSync} from 'fs'
import {compile} from 'handlebars'
import {join as pathJoin} from 'path'
import {cwd} from 'process'

export default class GenerateResolver extends Command {
  static description = 'Generate Angular Resolver'

  static aliases = ['gr', 'g:r']

  static flags = {
    help: flags.help({char: 'h'}),
    all: flags.boolean({char: 'a'})
  }

  static args = [{name: 'name'}]

  async run() {
    const {args, flags} = this.parse(GenerateResolver)

    this.log(
      chalk.red(
        figlet.textSync('Ngen', {horizontalLayout: 'full'})
      )
    )
    const __DIRNAME = __dirname
    const CURR_DIR = cwd()
    this.log(chalk.blue('Resolver Generating...'))
    const source = readFileSync(pathJoin(__DIRNAME, 'templates/resolver.hbs'), 'utf8').toString()
    const template = compile(source)
    const content = template({
      name: args.name,
      camelName: Case.camel(args.name),
      pascalName: Case.pascal(args.name),
      kebabName: Case.kebab(args.name),
      all: flags.all
    })

    const writePath = `${CURR_DIR}/${Case.kebab(args.name)}.resolver.ts`

    writeFileSync(writePath, content, 'utf8')
    this.log(chalk.green('Resolver Generated!'))
    this.log(chalk.green('CREATE '), writePath)
  }
}
