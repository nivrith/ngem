import {flags} from '@oclif/command'
import {copyFileSync} from 'fs'

import * as path from 'path'

import Command from '../base/maker.base'
export default class Init extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Init)
    await this.copyConfig()
    this.logSuccess('Ngem config file created in project')
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/nivrith/Desktop/polyrithm/ngen/src/commands/init.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }

  async copyConfig() {
    const src = path.join(__dirname, '../', Command.DEFAULT_CONFIG_FILENAME)
    const dest = path.join(this.root, Command.CONFIG_FILENAME)
    copyFileSync(src, dest)
  }
}
