import {flags} from '@oclif/command'
import chalk from 'chalk'

//Js style import as is-online does't have a type def
const isOnline = require('is-online')
import Command from '../../base/command.base'

export default class IsOnline extends Command {
  static description = 'Check if you are connected to the internet'

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'file'}]

  async run() {
    const online = await isOnline()
    this.log(chalk.green(online))
    const root = await Command.findRoot().catch(() => null)
    this.log(String(root))
    const config = await Command.getConfig()
    .catch(() => null)
    this.log(String(config))
  }
}
