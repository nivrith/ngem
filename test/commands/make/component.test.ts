import {expect, test} from '@oclif/test'

describe.only('make:component', () => {
  test
    .stdout()
    .command(['make:component', '--module', 'lumi'])
    .stdin('y\n')
    .it('runs make:component', ctx => {
      expect(ctx.stdout).to.contain('Component Generated')
    })
})
