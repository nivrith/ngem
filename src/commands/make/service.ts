import {flags} from '@oclif/command'

import Command from '../../base/maker.base'
import {FileType} from '../../enums/file-type.enum'
import {MakeType} from '../../enums/make-type.enum'

import {WriteFileConfig} from './../../models/write-file-config.model'
export default class MakeService extends Command {
  static description = 'describe the command here'

  static aliases = ['md', 'm:s']
  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of the service'}),
    module: flags.string({char: 'm', description: 'name of the module'}),
    // flag with no value (-f, --flat)
    flat: flags.boolean({char: 'f', description: 'create service without subfolder'}),
    open: flags.boolean({char: 'o', description: 'Open the generated file'})
  }

  static args = [{name: 'name'}]

  async run() {
    const {args, flags} = this.parse(MakeService)
    this.logInfo(`${MakeType.Service} Generating...`)
    const template = await this.getTemplate(MakeType.Service)
    const content = await this.makeContent(template, args, flags)
    const writeFileConfig: WriteFileConfig = {
      content,
      fileType: FileType.JavaScript,
      args,
      flags,
      templateType: MakeType.Service,
      flat: true
    }
    await this.writeFile(writeFileConfig)
  }
}
