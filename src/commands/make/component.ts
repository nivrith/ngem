import {Command, flags} from '@oclif/command'
import * as Case from 'case'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {mkdirSync, readFileSync, writeFileSync} from 'fs'
import {compile} from 'handlebars'
import * as notifier from 'node-notifier'
import open = require('opn')
import {join as pathJoin} from 'path'
import {cwd} from 'process'
export default class MakeComponent extends Command {
  static description = 'Create an AngularJs Component'

  static aliases = ['mc', 'm:c']
  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of the component'}),
    module: flags.string({char: 'm', description: 'name of the module'}),
    // flag with no value (-f, --flat)
    flat: flags.boolean({char: 'f', description: 'create component without subfolder'}),
    open: flags.boolean({char: 'o', description: 'Open the generated file'})
  }

  static args = [
    {name: 'name'},
    {name: 'artifact'}
  ]

  async run() {
    const {args, flags} = this.parse(MakeComponent)

    this.log(
      chalk.red(
        figlet.textSync('Ngen', {horizontalLayout: 'full'})
      )
    )

    const __DIRNAME = __dirname
    const CURR_DIR = cwd()
    this.log(chalk.blue('Component Generating...'))
    const source = readFileSync(pathJoin(__DIRNAME, 'templates/component.hbs'), 'utf8').toString()
    const template = compile(source)
    const content = template({
      name: Case.camel(args.name),
      module: flags.module || 'module'
    })

    let writePath: string
    // const name = flags.name || 'world'
    if (!flags.flat) {
      writePath = `${CURR_DIR}/${args.name}/${args.name}.component.js`
      try {
        mkdirSync(`${CURR_DIR}/${args.name}`)
      } catch (err) {
        if (err && err.code === 'EEXIST') {
          this.warn('Directory exists')
        }
        // this.error(err, {code: '1', exit: 1})
      }
    } else {
      writePath = `${CURR_DIR}/${args.name}.component.js`
    }

    writeFileSync(writePath, content, 'utf8')
    this.log(chalk.green('Component Generated!'))
    notifier.notify({
      title: 'Component Generated',
      message: 'CREATE: ' + writePath,
      icon: pathJoin(__DIRNAME, '../../img/cli.png')
    })

    if (flags.open) {
      open(writePath, {wait: false}).then(() =>
        this.log('then')
      ).catch(e => this.log('catch', e))
    }
  }
}
