import {expect, test} from '@oclif/test'

describe('generate:feature', () => {
  test
    .stdout()
    .command(['generate:feature'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['generate:feature', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
