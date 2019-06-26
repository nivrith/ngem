
import {expect, test} from '@oclif/test'
import {pathExistsSync} from 'fs-extra'
import * as path from 'path'

import {cleanUp} from '../../helpers'
import paths from '../../paths'

describe('make:component', () => {
  test
    .stdout()
    .command(['make:component', 'hello', '--module', 'lumi'])
    .it('Generates Component Without Errors', async ctx => {
      expect(ctx.stdout).to.contain('Component Generated!')
    })

  test
    .stdout()
    .command(['make:component', 'hello', '--module', 'lumi'])
    .it('Generates Component File', async () => {
      expect(pathExistsSync(path.join(paths.projectRoot, '/hello/hello.component.js'))).to.be.true
    })

  afterEach(function () {
    cleanUp('hello/')
  })

})
