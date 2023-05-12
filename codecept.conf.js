const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {

    ResembleHelper: {
      require: "codeceptjs-resemblehelper",
      screenshotFolder: "./screenshots/output/",
      baseFolder: './screenshots/BaseImage/',
      diffFolder: './screenshots/diff/',
    },

    Appium: {
      app: 'C:/Users/flexmobile/Documents/automacaoSupervisor/automacaosupervisor/apks/supervisor/superv.apk',
      platform: 'Android',
      device: 'pixel 2',
      restart: false,
      appWaitDuration: 10,

      desiredCapabilities: {
        appPackage: 'br.com.flexmobile.superv',
        appActivity: 'br.com.flextotal.superv.activities.LoginActivity',
        device: 'Pixel 2',
        platformVersion: '9',
        autoGrantPermissions: true,
        fullReset: true,
        resetOnSessionStartOnly: true

      }

      //  PACKAGES PARA AUTOAMAÇÃO
      // app:FlexmobileSuperv
      // package:br.com.flexmobile.superv
      // Launcher:br.com.flextotal.superv.activities.LoginActivity

    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
    homePage: "./pages/home.js",
    scrolPage: "./pages/scrol.js",
    clickNaTelaPage: "./pages/clickNaTela.js",
    compareHashPage: "./pages/CompareHash.js"
  },
  name: 'automacaoSupervisor'
}





// CAPABILITIES
// "app": "C:\\Users\\flexmobile\\Documents\\automacaoSupervisor\\apks\\supervisor\\superv.apk",
// "appPackage": "br.com.flexmobile.superv",
// "appActivity": "br.com.flextotal.superv.activities.LoginActivity",
// "platformVersion": "9",
// "platformName": "android",
// "device ": "pixel 2"