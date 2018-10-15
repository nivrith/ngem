import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import {mkdirSync, readFileSync, writeFileSync} from 'fs'
import {compile} from 'handlebars'
import {join as pathJoin} from 'path'
import {cwd} from 'process'
export default class GenerateComponent extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'name'}]

  async run() {
    const {args, flags} = this.parse(GenerateComponent)

    const __DIRNAME = __dirname
    const CURR_DIR = cwd()
    this.log('Component Generating...')
    const source = readFileSync(pathJoin(__DIRNAME, 'templates/component.tpl'), 'utf8').toString()
    const template = compile(source)
    const content = template({name: args.name})
    // const name = flags.name || 'world'
    const writePath = `${CURR_DIR}/${args.name}/${args.name}.component.js`
    mkdirSync(`${CURR_DIR}/${args.name}`)
    writeFileSync(writePath, content, 'utf8')
    this.log(chalk.green('Component Generated!'))
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }

}
