import {expect, test} from '@oclif/test'

describe('make:filter', () => {
  test
    .stdout()
    .command(['make:filter'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['make:filter', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
