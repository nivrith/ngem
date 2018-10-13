import {expect, test} from '@oclif/test'

describe('generate:interceptor', () => {
  test
    .stdout()
    .command(['generate:interceptor'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['generate:interceptor', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
