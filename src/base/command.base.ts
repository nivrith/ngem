import Command from '@oclif/command'
import chalk from 'chalk'
import * as figlet from 'figlet'
import {existsSync, readJSON} from 'fs-extra'
import * as path from 'path'
import {cwd} from 'process'
const findRoot = require('find-root')
import {NgemConfig} from '../models/ngem-config.model'

// src/base.ts

export default abstract class extends Command {
  async init() {
    this.log(
      chalk.red(
        figlet.textSync('Ngem', {horizontalLayout: 'full'})
      )
    )
  }

  async getConfig(): Promise<NgemConfig> {
    const root = await findRoot(cwd(), function (dir: string) {
      return existsSync(path.resolve(dir, 'ngem.json'))
    })
    const ngenConfig: NgemConfig = await readJSON(path.join(root, 'ngem.json'))
    return ngenConfig
  }

  async findRoot(): Promise<string> {
    const root = await findRoot(cwd(), function (dir: string) {
      return existsSync(path.resolve(dir, 'ngem.json'))
    })
    return root
  }
  async writeDir() {
  }

}
