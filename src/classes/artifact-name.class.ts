import * as Case from 'case'
export class ArtifactName {
  public snake = ''
  public camel = ''
  public pascal = ''
  public title = ''
  public kebab = ''
  public constant = ''
  public header = ''
  public upper = ''
  public lower = ''

  constructor(name: string) {
    this.camel = Case.camel(name)
    this.constant = Case.constant(name)
    this.header = Case.header(name)
    this.kebab = Case.kebab(name)
    this.lower = Case.lower(name)
    this.pascal = Case.pascal(name)
    this.snake = Case.snake(name)
    this.title = Case.capital(name)
    this.upper = Case.upper(name)
  }
}
