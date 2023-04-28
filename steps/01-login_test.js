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

}).tag('@ConfigCNPJerrado');

Scenario('Config. - usuario errado', () => {
    // EU COMO USUARIO TENTO  ACESSAR COM O CODIGO DE USUARIO ERRADO
    loginPage.doLoginCNPJcorreto(CNPJ_CORRETO, CD_FUNC)
    loginPage.doLoginUserErrado(USUARIO_INCORRETO, SENHA_CORRETA)

}).tag('@ConfigCdfuncErrado');

Scenario('Login Errado', () => {
    //EU COMO USUARIO TENTO ACESSAR COM A SENHA ERRADA
    loginPage.doLoginUserErrado(USUARIO_CORRETO, SENHA_ERRADA)
}).tag('@LoginErrado');

Scenario('Login  Certo', () => {
    //EU COMO USUARIO ACESSO COM O CODIGO DE USUARIO CORRETO
    loginPage.doLoginUserCorreto(USUARIO_CORRETO, SENHA_CORRETA)

}).tag('Login_Certo');

