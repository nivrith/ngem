import {expect, test} from '@oclif/test'

describe('generate:resolver', () => {
  test
    .stdout()
    .command(['generate:resolver'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['generate:resolver', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
