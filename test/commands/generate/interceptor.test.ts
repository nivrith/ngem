
import {expect, test} from '@oclif/test'
import {pathExistsSync} from 'fs-extra'
import * as path from 'path'

import {cleanUp} from '../../helpers'
import paths from '../../paths'

describe('generate:interceptor', () => {
  beforeEach(function () {
    cleanUp('/hello.interceptor.ts')
  })

  test
    .stdout()
    .command(['generate:interceptor', 'hello'])
    .it('Generates Interceptor Without Errors', async ctx => {
      expect(ctx.stdout).to.contain('Interceptor Generated!')
    })

  test
    .stdout()
    .command(['generate:interceptor', 'hello'])
    .it('Generates Interceptor File', async () => {
      expect(pathExistsSync(path.join(paths.projectRoot, '/hello.interceptor.ts'))).to.be.true
    })

  afterEach(function () {
    cleanUp('/hello.interceptor.ts')
  })

})
