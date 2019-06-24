import {expect, test} from '@oclif/test'

describe('is:online', () => {
  test
    .stdout()
    .command(['is:online'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('You are Online! :)')
    })
})
