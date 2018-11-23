export interface NgemConfig {
  prefix: string,
  openOnCreate: boolean,
  defaultModule: string,
  flat: boolean,
  angularjs: {
    templatesDir: string,
  }
  angular: {
    templatesDir: string,
  }
}
