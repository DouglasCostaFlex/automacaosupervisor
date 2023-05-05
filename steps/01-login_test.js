Feature('Login').tag('@login');

// ESSAS SÃO VARIAVEIS PARA REALIZAR AUTOMAÇAO NO LOGIN
const {

    CNPJ_CORRETO,  // CNPJ CORRETO
    CNPJ_INCORRETO, // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    CD_FUNC_INCORRETO, //CODIGO DE FUNCIONARIO ERRADO
    USUARIO_INCORRETO, //USUARIO ERRADO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_ERRADA, //SENHA ERRADA
    SENHA_CORRETA //SENHA CORRETA

} = require('../config.js');
const { I, loginPage } = inject()


Scenario('Config. - CPNJ errado', () => {

    I.wait(1)
    // EU COMO USUARIO ACESSO O LOGIN COM O CNPJ ERRADO
    loginPage.doLoginCNPJerrado(CNPJ_INCORRETO, CD_FUNC)

});

Scenario('Login com usuario errado', () => {
    // EU COMO USUARIO TENTO  ACESSAR COM O CODIGO DE USUARIO ERRADO //

    // EU COLOCO O CNPJ CERTO.
}).tag('@ConfigCNPJerrado');

Scenario('Config. - usuario errado', () => {
    // EU COMO USUARIO TENTO  ACESSAR COM O CODIGO DE USUARIO ERRADO
    loginPage.doLoginCNPJcorreto(CNPJ_CORRETO, CD_FUNC)
    // EU COLOCO O USUARIO ERRADO.
    loginPage.doLoginUserErrado(USUARIO_INCORRETO, SENHA_CORRETA)
    // EU ESPERO PELA MENSAGEM DE ERRO.
    I.waitForElement('#android:id/button3', 10)
    // EU TIRO UMA FOTO DO ERRO.
    I.saveScreenshot("02-USER_ERRADO_Screenshot_Image.png");
    // EU COMPARO A FOTO COM A FOTO BASE.
    I.seeVisualDiff("02-USER_ERRADO_Screenshot_Image.png", { tolerance: 2, prepareBaseImage: false });
    // EU APERTO NO BOTAO OK.
    I.tap('#android:id/button3')


}).tag('@ConfigCdfuncErrado');

Scenario('Login com senha do usuario errado', () => {
    //EU COMO USUARIO TENTO ACESSAR COM A SENHA ERRADA//

    //EU COLOCO A SENHA ERRADA.
    loginPage.doLoginUserErrado(USUARIO_CORRETO, SENHA_ERRADA)
    //EU ESPERO PELA MENSAGEM DE ERRO.
    I.waitForElement('#android:id/button3', 10)
    //EU TIRO UMA FOTO DO ERRO.
    I.saveScreenshot("03-SENHA_ERRADO_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A FOTO DA BASE.
    I.seeVisualDiff("03-SENHA_ERRADO_Screenshot_Image.png", { tolerance: 2, prepareBaseImage: false });
    //EU APERTO NO BOTAO OK.
    I.tap('#android:id/button3')

});

Scenario('Login Errado', () => {
    //EU COMO USUARIO TENTO ACESSAR COM A SENHA ERRADA
    loginPage.doLoginUserErrado(USUARIO_CORRETO, SENHA_ERRADA)
}).tag('@LoginErrado');


Scenario('Login  Certo', () => {
    //EU COMO USUARIO ACESSO COM O CODIGO DE USUARIO CORRETO

    //EU COLOGO CNPJ , LOGIN E SENHA CORRETOS E LOGO NO APLICATIVO.
    loginPage.doLoginUserCorreto(USUARIO_CORRETO, SENHA_CORRETA)

}).tag('Login_Certo');



