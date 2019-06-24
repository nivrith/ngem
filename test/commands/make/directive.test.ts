
import {expect, test} from '@oclif/test'
import {pathExistsSync} from 'fs-extra'
import * as path from 'path'

import {cleanUp} from '../../helpers'
import paths from '../../paths'

describe('make:directive', () => {
  beforeEach(function () {
    cleanUp('/hello.directive.js')
  })

  test
    .stdout()
    .command(['make:directive', 'hello', '--module', 'lumi'])
    .it('Generates Directive Without Errors', async ctx => {
      expect(ctx.stdout).to.contain('Directive Generated!')
    })

  test
    .stdout()
    .command(['make:directive', 'hello', '--module', 'lumi'])
    .it('Generates Directive File', async () => {
      expect(pathExistsSync(path.join(paths.projectRoot, '/hello.directive.js'))).to.be.true
    })

  afterEach(function () {
    cleanUp('/hello.directive.js')
  })

})
