Feature('Trocar surpevisor').tag('@TrocarSurpevisor');

const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

const { I, clickNaTelaPage,loginPage } = inject()

 
Scenario('Selecionar surpevisor', () => {

    //EU COMO USUARIO ESPERO TROCAR O SURPERVISOR
    tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    I.tap('#br.com.flexmobile.superv:id/selecionar_supervisor')
    I.wait(3)
    clickNaTelaPage.doClick(350, 270)
    I.wait(2)
    
}).tag('@SelecionarSurpevisor');



