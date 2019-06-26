import {flags} from '@oclif/command'
import {copyFileSync} from 'fs'
import * as path from 'path'

import Command from '../base/maker.base'
export default class Init extends Command {
  static description = 'Initialize ngem in your project'

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'file'}]

  async run() {
    // const {args, flags} = this.parse(Init)
    this.logInfo('Initialising...')
    await this.copyConfig()
    this.logSuccess('Ngem config file created in project')
  }

  async copyConfig() {
    const src = path.join(__dirname, '../', Command.DEFAULT_CONFIG_FILENAME)
    const dest = path.join(this.root, Command.CONFIG_FILENAME)
    copyFileSync(src, dest)
  }
}
