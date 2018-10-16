import Command from '@oclif/command'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {existsSync, readJSON} from 'fs-extra'
import * as path from 'path'
import {cwd} from 'process'
const findRoot = require('find-root')
import {NgenConfig} from '../models/ngen-config.model'

// src/base.ts

export default abstract class extends Command {
  static async getConfig(): Promise<NgenConfig> {
    const root = await findRoot(cwd(), function (dir: string) {
      return existsSync(path.resolve(dir, 'ngen.json'))
    })
    const ngenConfig: NgenConfig = await readJSON(path.join(root, 'ngen.json'))
    return ngenConfig
  }

  static async findRoot(): Promise<string> {
    const root = await findRoot(cwd(), function (dir: string) {
      return existsSync(path.resolve(dir, 'ngen.json'))
    })
    return root
  }

  async init() {
    this.log(
      chalk.red(
        figlet.textSync('Ngen', {horizontalLayout: 'full'})
      )
    )
  }

}
