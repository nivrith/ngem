import {flags} from '@oclif/command'

import Command from '../../base/maker.base'
import {FileType} from '../../enums/file-type.enum'
import {MakeType} from '../../enums/make-type.enum'

import {WriteFileConfig} from './../../models/write-file-config.model'
export default class MakeDirective extends Command {
  static description = 'describe the command here'

  static aliases = ['md', 'm:d']
  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of the directive'}),
  }

  static args = [{name: 'name'}]

  async run() {
    const {args, flags} = this.parse(MakeDirective)
    this.logInfo(`${MakeType.Directive} Generating...`)
    const template = await this.getTemplate(MakeType.Directive)
    const content = await this.makeContent(template, args, flags)
    const writeFileConfig: WriteFileConfig = {
      content,
      fileType: FileType.JavaScript,
      args,
      flags,
      templateType: MakeType.Directive,
      flat: true
    }
    await this.writeFile(writeFileConfig)
  }
}
