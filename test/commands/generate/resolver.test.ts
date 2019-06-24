
import {expect, test} from '@oclif/test'
import {pathExistsSync} from 'fs-extra'
import * as path from 'path'

import {cleanUp} from '../../helpers'
import paths from '../../paths'

describe('generate:resolver', () => {
  beforeEach(function () {
    cleanUp('/hello.resolver.ts')
  })

  test
    .stdout()
    .command(['generate:resolver', 'hello'])
    .it('Generates Resolver Without Errors', async ctx => {
      expect(ctx.stdout).to.contain('Resolver Generated!')
    })

  test
    .stdout()
    .command(['generate:resolver', 'hello'])
    .it('Generates Resolver File', async () => {
      expect(pathExistsSync(path.join(paths.projectRoot, '/hello.resolver.ts'))).to.be.true
    })

  afterEach(function () {
    cleanUp('/hello.resolver.ts')
  })

})
