import Command from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'
import {cwd} from 'process'
const findRoot = require('find-root')
import {NgenConfig} from '../models/ngen-config.model'

// src/base.ts

export default abstract class extends Command {
  static async getConfig(): Promise<NgenConfig> {
    const root = await findRoot(cwd(), function (dir: string) {
      return fs.existsSync(path.resolve(dir, 'ngen.json'))
    })
    const ngenConfig: NgenConfig = await fs.readJSON(path.join(root, 'ngen.json'))
    return ngenConfig
  }

  static async findRoot(): Promise<string> {
    const root = await findRoot(cwd(), function (dir: string) {
      return fs.existsSync(path.resolve(dir, 'ngen.json'))
    })
    return root
  }

}
