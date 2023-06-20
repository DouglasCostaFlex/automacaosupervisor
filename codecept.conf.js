
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {

    ResembleHelper: {
      require: "codeceptjs-resemblehelper",
<<<<<<< Updated upstream
      screenshotFolder : "./screenshots/output/",
      baseFolder: './screenshots/BaseImage/',
      diffFolder: './screenshots/diff/',
=======
      screenshotFolder: "./screenshots/output/",
      baseFolder: 'C:/Users/flexmobile/Documents/AUTOMACOES/automacaoSupervisor/automacaosupervisor/screenshots/BaseImage',
      diffFolder: 'C:/Users/flexmobile/Documents/AUTOMACOES/automacaoSupervisor/automacaosupervisor/screenshots/diff',
>>>>>>> Stashed changes
    },

   
    Appium: {
      app: 'C:/Users/flexmobile/Documents/AUTOMACOES/automacaoSupervisor/automacaosupervisor/apks/supervisor/superv.apk',
      platform: 'Android',
      device: 'pixel 2',
      restart: false,
<<<<<<< Updated upstream
      appWaitDuration:10,
=======
      appWaitDuration: 10,
      autoGrantPermissions: true,
      // automationName: 'UiAutomator2',
      fullReset: true,
      resetOnSessionStartOnly: true,
      
>>>>>>> Stashed changes

      desiredCapabilities: {
        appPackage: 'br.com.flexmobile.superv',
        appActivity: 'br.com.flextotal.superv.activities.LoginActivity',
        device: 'Pixel 2',     //mudar ao trocar aplicativo
        platformVersion: '9',  //trocar ao mudar apk
        autoGrantPermissions: true,
        fullReset: true,
        resetOnSessionStartOnly: true,
        adbExecTimeout: 30000,
        // automationName: 'UiAutomator2'
      },

      //capabilities para inspector no appium//
      // {
      //   "appPackage": "br.com.flexmobile.superv",
      //   "appActivity": "br.com.flextotal.superv.activities.LoginActivity",
      //   "platformVersion": "9",
      //   "platformName": "android",
      //   "device ": "pixel 2",
      //   "noReset": "true",
      //   "restart": "false",
      //   "app": "C:\\Users\\flexmobile\\Documents\\automacaoSupervisor\\automacaosupervisor\\apks\\supervisor\\superv.apk"
      // }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
    homePage: "./pages/home.js",
    scrolPage: "./pages/scrol.js",
    clickNaTelaPage: "./pages/clickNaTela.js",
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
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