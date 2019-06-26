
import {expect, test} from '@oclif/test'
import {pathExistsSync} from 'fs-extra'
import * as path from 'path'

import {cleanUp} from '../../helpers'
import paths from '../../paths'

describe('make:service', () => {
  beforeEach(function () {
    cleanUp('/hello.service.js')
  })

  test
    .stdout()
    .command(['make:service', 'hello', '--module', 'lumi'])
    .it('Generates Service Without Errors', async ctx => {
      expect(ctx.stdout).to.contain('Service Generated!')
    })

  test
    .stdout()
    .command(['make:service', 'hello', '--module', 'lumi'])
    .it('Generates Service File', async () => {
      expect(pathExistsSync(path.join(paths.projectRoot, '/hello.service.js'))).to.be.true
    })

  afterEach(function () {
    cleanUp('/hello.service.js')
  })

})
