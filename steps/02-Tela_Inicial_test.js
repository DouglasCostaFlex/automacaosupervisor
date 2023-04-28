Feature('Tela Inicial').tag('@TelaInicial');

const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

const { I, scrolPage, loginPage } = inject()


Scenario('Total de Vendas', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU ESPEROO VER O TOTAL DE VENDAS
    I.seeElement('#br.com.flexmobile.superv:id/total_vendas')
}).tag('@TotalDeVendas');

Scenario('Total de devolução', () => {
    //EU ESPERO VER O TOTAL DE DEVOLUÇÃO
    I.seeElement('#br.com.flexmobile.superv:id/total_devolucao')
}).tag('@TotalDeDevolução');;

Scenario('Total de clientes', () => {

    //EU ESPERO VER O  TOTAL CLIENTES
    I.seeElement('#br.com.flexmobile.superv:id/total_clientes')
}).tag('@TotalDeClientes');

Scenario('Gráficos', () => {

    // EU ESPERO ENCONTRAR O GRAFICO DE VENDAS
    I.seeElement('#br.com.flexmobile.superv:id/grafico_title')
});

Scenario('Top Clientes E Top Produtos', () => {

    //EU ESPERO VER TOP CLIENTES E TOP PRODUTOS
    scrolPage.doScrol(300, 1778, 300, 220)
    I.waitForElement('#br.com.flexmobile.superv:id/clientes_title')
    I.seeElement('#br.com.flexmobile.superv:id/clientes_title')
    scrolPage.doScrol(300, 250, 300, 1800)
    I.wait(2)

}).tag("@TopClientesETopProdutos");