import {flags} from '@oclif/command'
import chalk from 'chalk'
//Js style import as is-online does't have a type def
// import {Project} from 'ts-simple-ast'
const isOnline = require('is-online')
import Command from '../../base/maker.base'

export default class IsOnline extends Command {
  static description = 'Check if you are connected to the internet'

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'file'}]

  async run() {
    const online = await isOnline()
    this.log(chalk.green(online))
    this.log(JSON.stringify(Command.ngemConfig))
  }
}
