import {expect, test} from '@oclif/test'

describe('make:directive', () => {
  test
    .stdout()
    .command(['make:directive'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['make:directive', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
