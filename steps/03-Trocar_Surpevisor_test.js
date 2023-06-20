Feature('103-Trocar surpevisor').tag('@TrocarSurpevisor');

const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

const { I,loginPage,clickNaTelaPage } = inject()

 
Scenario('Selecionar surpevisor', () => {

    //EU COMO USUARIO ESPERO TROCAR O SURPERVISOR//

    // //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    // tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    
   // EU APERTO NO BOTAO TROCAR SUPERVISOR.
    I.tap('#br.com.flexmobile.superv:id/selecionar_supervisor')
     //EU ESPERO.JFJHFGH
    I.wait(3)
    // EU TIRO UMA FOTO.                                            
    I.saveScreenshot("10-TrocarSupervisor_Screenshot_Image.png");
    // EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("10-TrocarSupervisor_Screenshot_Image.png", {tolerance: 4, prepareBaseImage: true});
    //EU ESPERO.
    I.wait(1)
    // EU CLICO NA TELA.
    clickNaTelaPage.doClick(335, 300)
    //EU ESPERO.
    I.wait(5)
    
}).tag('@SelecionarSurpevisor');



