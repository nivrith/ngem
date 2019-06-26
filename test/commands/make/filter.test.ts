
import {expect, test} from '@oclif/test'
import {pathExistsSync} from 'fs-extra'
import * as path from 'path'

import {cleanUp} from '../../helpers'
import paths from '../../paths'

describe('make:filter', () => {
  beforeEach(function () {
    cleanUp('/hello.filter.js')
  })

  test
    .stdout()
    .command(['make:filter', 'hello', '--module', 'lumi'])
    .it('Generates Filter Without Errors', async ctx => {
      expect(ctx.stdout).to.contain('Filter Generated!')
    })

  test
    .stdout()
    .command(['make:filter', 'hello', '--module', 'lumi'])
    .it('Generates Filter File', async () => {
      expect(pathExistsSync(path.join(paths.projectRoot, '/hello.filter.js'))).to.be.true
    })

  afterEach(function () {
    cleanUp('/hello.filter.js')
  })

})
