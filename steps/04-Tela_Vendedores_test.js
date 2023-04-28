
Feature('Tela Vendedores').tag('@Tela_Vendedores');

const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

const { I, clickNaTelaPage, loginPage } = inject()

Scenario('Tela de vendedores', () => {
    tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU COMO USUARIO CLICO NO MENU VENDODORES
    I.tap('~Navigate up')
    I.tap('Vendedores')
    I.wait(1)
    // EU VERIFICO SE APARECE METAS, CLIENTES, VENDAS E PEDIDOS.
    I.seeElement('METAS', 'CLIENTES', 'VENDAS', 'PEDIDOS')
}).tag('@TelaDeVendedores');

Scenario('Metas', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU CLICO EM CLIENTES, ESPERO VER METAS VIGENTES E METAS VENCIDAS
    clickNaTelaPage.doClick(157, 725)
    I.waitForElement('VIGENTES', 4)
    I.waitForElement('VENCIDAS', 4)
    I.tap('~Navigate up')
    I.wait(2)

}).tag('@Metas');

Scenario('Clientes', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU CLICO EM CLIENTE, ESPERO VER UMA LISTA. 
    clickNaTelaPage.doClick(450, 725)
    I.wait(2)
    I.waitForElement('#br.com.flexmobile.superv:id/content', 100)
    I.tap('~Navigate up')
    I.wait(2)

}).tag('@Clientes');

Scenario('Vendas', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU CLICO EM VENDAS, ESPERO VER UMA LISTA.
    clickNaTelaPage.doClick(659, 725)
    I.waitForElement('#android:id/list', 10)
    I.seeElement('#android:id/list')
    I.tap('~Navigate up')
    I.wait(2)
}).tag('@Vendas');

Scenario('PEDIDOS', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAteoVendedores(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU CLICO EM PEDIDOS, ESPERO VER UMA LISTA.
    clickNaTelaPage.doClick(950, 725)
    I.waitForElement('#br.com.flexmobile.superv:id/list', 10)
    I.seeElement('#br.com.flexmobile.superv:id/list')
    I.tap('~Navigate up')
    I.wait(2)
}).tag('@Pedidos');
