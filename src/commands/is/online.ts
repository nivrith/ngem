import {flags} from '@oclif/command'
//Js style import as is-online does't have a type def
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
    if (online) {
      this.logSuccess('You are Online! :)')
    } else {
      this.logError('You are Offline! :(')
    }
  }
}
