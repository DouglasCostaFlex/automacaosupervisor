/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/login.js');
type homePage = typeof import('./pages/home.js');
type scrolPage = typeof import('./pages/scrol.js');
type clickNaTelaPage = typeof import('./pages/clickNaTela.js');
type ResembleHelper = import('codeceptjs-resemblehelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, scrolPage: scrolPage, clickNaTelaPage: clickNaTelaPage }
  interface Methods extends ResembleHelper, Appium {}
  interface I extends ReturnType<steps_file>, WithTranslation<ResembleHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
