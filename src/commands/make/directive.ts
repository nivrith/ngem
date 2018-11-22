import {Command, flags} from '@oclif/command'
import * as Case from 'case'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {readFileSync, writeFileSync} from 'fs'
import {compile} from 'handlebars'
import {join as pathJoin} from 'path'
import {cwd} from 'process'
export default class MakeDirective extends Command {
  static description = 'describe the command here'

  static aliases = ['md', 'm:d']
  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of the directive'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(MakeDirective)

    this.log(
      chalk.red(
        figlet.textSync('Ngem', {horizontalLayout: 'full'})
      )
    )
    const __DIRNAME = __dirname
    const CURR_DIR = cwd()
    this.log(chalk.blue('Directive Generating...'))
    const source = readFileSync(pathJoin(__DIRNAME, 'templates/directive.hbs'), 'utf8').toString()
    const template = compile(source)
    const content = template({
      name: Case.camel(args.name || flags.name)
    })

    // const name = flags.name || 'world'
    const writePath = `${CURR_DIR}/${args.name}.directive.js`

    writeFileSync(writePath, content, 'utf8')
    this.log(chalk.green('Directive Generated!'))
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
