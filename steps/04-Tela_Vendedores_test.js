
Feature('104-Tela Vendedores').tag('@Tela_Vendedores');

const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

const { I, clickNaTelaPage, loginPage } = inject()

Scenario('Tela de vendedores', () => {
    //EU ENTRO NA TELA VENDEDORES//

    // //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    // tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU COMO USUARIO CLICO NO MENU .
    I.tap('~Navigate up')
    //EU COMO USUARIO CLICO NO MENU VENDODORES
    I.tap('Vendedores')
    //EU ESPERO
    I.wait(1)
    // EU VERIFICO SE APARECE METAS, CLIENTES, VENDAS E PEDIDOS.
    I.seeElement('METAS', 'CLIENTES', 'VENDAS', 'PEDIDOS')
    //EU TIRO UMA FOTO.
    I.saveScreenshot("11-METAS_CLIENTES_VENDAS_PEDIDOS_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("11-METAS_CLIENTES_VENDAS_PEDIDOS_Screenshot_Image.png", {tolerance: 4, prepareBaseImage: false});
    // EU ESPERO.
    I.wait(1)

}).tag('@TelaDeVendedores');

Scenario('Metas', () => {
    //EU ENTRO NO METAS DENTRO DO VENDEDORES.

    // //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    // tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO EM CLIENTES, ESPERO VER METAS VIGENTES E METAS VENCIDAS
    clickNaTelaPage.doClick(157, 725)
    // EU ESPERO PELO ELEMNTO VIGENTES.
    I.waitForElement('VIGENTES', 4)
    // EU ESPERO PELO ELEMNTO VENCIDAS.
    I.waitForElement('VENCIDAS', 4)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("12-VIGENTES_VENCIDAS_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A FOTO DA BASE.
    I.seeVisualDiff("12-VIGENTES_VENCIDAS_Screenshot_Image.png", {tolerance: 4, prepareBaseImage: false});
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(2)

}).tag('@Metas');

Scenario('Clientes', () => {
    //EU ENTRO DENTRO DE CLIENTES.

    //  //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    // tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO EM CLIENTE, ESPERO VER UMA LISTA. 
    clickNaTelaPage.doClick(450, 725)
    //EU ESPERO PELO ELEMENTO CLIENTES.
    I.waitForElement('#br.com.flexmobile.superv:id/SpClientes',50)
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("13-CLIENTES_Screenshot_Image.png");
    //EU COMPARO COM A FOTO DA BASE.
    I.seeVisualDiff("13-CLIENTES_Screenshot_Image.png", {tolerance: 4, prepareBaseImage: false});
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(2)

}).tag('@Clientes');

Scenario('Vendas', () => {
    //EU ENTRO EM VENDAS.//

    //  //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    // tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO EM VENDAS, ESPERO VER UMA LISTA.
    clickNaTelaPage.doClick(659, 725)
    //EU ESPERO PELAS LISTA DE VENDAS.
    I.waitForElement('#android:id/list', 50)
    //EU VEJO A LISTA DE VENDAS.
    I.seeElement('#android:id/list')
    //EU TIRO UMA FOTO.
    I.saveScreenshot("14-VENDAS_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("14-VENDAS_Screenshot_Image.png", {tolerance: 4, prepareBaseImage: false});
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(2)

}).tag('@Vendas');

Scenario('PEDIDOS', () => {
    //EU ENTRO NO PEDIDOS//

    //  //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    // tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO EM PEDIDOS, ESPERO VER UMA LISTA.
    clickNaTelaPage.doClick(950, 725)
    //EU ESPERO PELA LISTA DE PEDIDOS.
    I.waitForElement('#br.com.flexmobile.superv:id/list', 50)
    //EU ESPERO VER A LISTA DE PEDIDOS.
    I.seeElement('#br.com.flexmobile.superv:id/list')
    //EU TIRO UMA FOTO.
    I.saveScreenshot("15-PEDIDOS_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("15-PEDIDOS_Screenshot_Image.png", {tolerance: 4, prepareBaseImage: false});
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(2)
    
}).tag('@Pedidos');
