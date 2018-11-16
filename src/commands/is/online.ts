import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
//Js style import as is-online does't have a type def
// import {Project} from 'ts-simple-ast'
const isOnline = require('is-online')
const socialy = require('socialy')

export default class IsOnline extends Command {
  static description = 'Check if you are connected to the internet'

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'file'}]

  async run() {
    const online = await isOnline()
    this.log(chalk.green(online))
    const musiceternal = await socialy.instagram('_nivrith_')
    this.log(musiceternal)

    // const project = new Project()
    // const sourceFile = project.addExistingSourceFile('./src/home.module.ts')// or addExistingSourceFileIfExists
    // const classdec = sourceFile.getClasses()[0]
    // const decorator = classdec.getDecorators()[0]
    // const arg = decorator.getArguments()[0]
    // const text = arg.getFullText()
    // const imports = arg.compilerNode
    // const importsArrays = decorator.getArguments()
    // project.save()
    // this.log(String(importsArrays), String(arg))
  }
}
