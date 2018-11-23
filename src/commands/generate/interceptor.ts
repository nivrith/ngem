import {flags} from '@oclif/command'
import * as Case from 'case'
import chalk from 'chalk'
import {readFileSync, writeFileSync} from 'fs'
import {compile} from 'handlebars'
import {join as pathJoin} from 'path'
import {cwd} from 'process'

import Command from '../../base/maker.base'

export default class GenerateInterceptor extends Command {
  static description = 'Generate Angular Interceptor'

  static aliases = ['gi', 'g:i']

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'name'}]

  async run() {
    const {args} = this.parse(GenerateInterceptor)

    const __DIRNAME = __dirname
    const CURR_DIR = cwd()
    this.log(chalk.blue('Interceptor Generating...'))
    const source = readFileSync(pathJoin(__DIRNAME, 'templates/interceptor.hbs'), 'utf8').toString()
    const template = compile(source)
    const content = template({
      name: Case.pascal(args.name)
    })

    const writePath = `${CURR_DIR}/${args.name}.interceptor.ts`

    writeFileSync(writePath, content, 'utf8')
    this.log(chalk.green('Interceptor Generated!'))
    this.log(chalk.green('CREATE '), writePath)
  }
}
