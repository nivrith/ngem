import {pathExistsSync, removeSync} from 'fs-extra'
import * as path from 'path'

import paths from './paths'

export function cleanUp(filePath: string) {
  if (pathExistsSync(path.join(paths.projectRoot, filePath))) {
    removeSync(path.join(paths.projectRoot, filePath))
  }
}
