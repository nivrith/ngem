import {resolve as pathResolve} from 'path'
export default {
  projectRoot: pathResolve(__dirname, '../'),
  src: pathResolve(__dirname, '../src'),
  commands: pathResolve(__dirname, '../src/commands'),
  make: pathResolve(__dirname, '../src/commands/make'),
  makeTemplates: pathResolve(__dirname, '../src/commands/make/templates'),
  generate: pathResolve(__dirname, '../src/commands/generate'),
  generateTemplates: pathResolve(__dirname, '../src/commands/generate/templates')

}
