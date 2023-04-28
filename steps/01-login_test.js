Feature('Login').tag('@login');

// ESSAS SÃO VARIAVEIS PARA REALIZAR AUTOMAÇAO NO LOGIN
const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CNPJ_INCORRETO, // CNPJ CORRETO 
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    CD_FUNC_INCORRETO, //CODIGO DE FUNCIONARIO ERRADO
    USUARIO_INCORRETO, //USUARIO ERRADO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_ERRADA, //SENHA ERRADA
    SENHA_CORRETA //SENHA CORRETA

} = require('../config.js');
const { I, loginPage } = inject()


Scenario('Configuração - CPNJ errado', () => {

  I.wait(1)
    // EU COMO USUARIO ACESSO O LOGIN COM O CNPJ ERRADO
    loginPage.doLoginCNPJerrado(CNPJ_INCORRETO, CD_FUNC)

});

Scenario('Login com usuario errado', () => {
    // EU COMO USUARIO TENTO  ACESSAR COM O CODIGO DE USUARIO ERRADO
    loginPage.doLoginCNPJcorreto(CNPJ_CORRETO, CD_FUNC)
    loginPage.doLoginUserErrado(USUARIO_INCORRETO, SENHA_CORRETA)

});

Scenario('Login com senha do usuario errado', () => {
    //EU COMO USUARIO TENTO ACESSAR COM A SENHA ERRADA
    loginPage.doLoginUserErrado(USUARIO_CORRETO, SENHA_ERRADA)
});

Scenario('Login com sucesso', () => {
    //EU COMO USUARIO ACESSO COM O CODIGO DE USUARIO CORRETO
    loginPage.doLoginUserCorreto(USUARIO_CORRETO, SENHA_CORRETA)

});

