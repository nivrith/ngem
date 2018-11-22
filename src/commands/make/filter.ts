import {Command, flags} from '@oclif/command'
import * as Case from 'case'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {readFileSync, writeFileSync} from 'fs'
import {compile} from 'handlebars'
import {join as pathJoin} from 'path'
import {cwd} from 'process'
export default class MakeFilter extends Command {
  static description = 'describe the command here'

  static aliases = ['mf', 'm:f']
  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of the filter'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
    module: flags.string({char: 'm', description: 'Name of the AngularJs Module'})
  }

  static args = [{name: 'name'}]

  async run() {
    const {args, flags} = this.parse(MakeFilter)

    this.log(
      chalk.red(
        figlet.textSync('Ngem', {horizontalLayout: 'full'})
      )
    )
    const __DIRNAME = __dirname
    const CURR_DIR = cwd()
    this.log(chalk.blue('Filter Generating...'))
    const source = readFileSync(pathJoin(__DIRNAME, 'templates/filter.hbs'), 'utf8').toString()
    const template = compile(source)
    const content = template({
      name: Case.camel(args.name || flags.name),
      module: Case.camel(args.module || flags.module || 'module'),
    })

    // const name = flags.name || 'world'
    const writePath = `${CURR_DIR}/${args.name}.filter.js`

    writeFileSync(writePath, content, 'utf8')
    this.log(chalk.green('Filter Generated!'))
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
