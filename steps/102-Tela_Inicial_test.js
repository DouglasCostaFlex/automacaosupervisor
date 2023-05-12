Feature('Tela Inicial').tag('@TelaInicial');

const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

const { I, loginPage } = inject()


Scenario('01-Total de Vendas', () => {
    //EU ESPERO VER O TOTAL DE VENDAS.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU ESPEROO VER O TOTAL DE VENDAS
    I.seeElement('#br.com.flexmobile.superv:id/total_vendas')
    //EU ESPERO
    I.wait(1)
    // EU TIRO UMA FOTO DO TOTAL DE VENDAS.
    I.saveScreenshot("05-TotalDeVendas_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A FOTO DA BASE
    I.seeVisualDiff("05-TotalDeVendas_Screenshot_Image.png", { tolerance: 5, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(1)
    
});

Scenario('02-Total de devolução', () => {
    //EU ESPERO VER O TOTAL DE DEVOLUÇÃO//

    //EU ESPERO VER TOTAL DE DEVOLUÇÃO 
    I.seeElement('#br.com.flexmobile.superv:id/total_devolucao')
    //EU ESPERO
    I.wait(1)
    //EU TIRO UMA FOTO
    I.saveScreenshot("06-TotalDeDevolucao_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("06-TotalDeDevolucao_Screenshot_Image.png", { tolerance: 5, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(1)

});


Scenario('03-Total de clientes', () => {
    //EU ESPERO VER O  TOTAL CLIENTES//

    //EU ESPERO VER O TOTAL DE CLIENTES.
    I.seeElement('#br.com.flexmobile.superv:id/total_clientes')
    // EU ESPERO.
    I.wait(1)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("07-TotalDeClientes_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("07-TotalDeClientes_Screenshot_Image.png", { tolerance: 5, prepareBaseImage: false });
    // EU ESPERO.
    I.wait(1)



});

Scenario('04-Gráficos', () => {
    // EU ESPERO ENCONTRAR O GRAFICO DE VENDAS.//

    //EU ESPERO VER O GRAFICOS.
    I.seeElement('#br.com.flexmobile.superv:id/grafico_title')
    //EU ESPERO.
    I.wait(1)
    // EU TIRO UMA FOTO.
    I.saveScreenshot("08-Graficos_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("08-Graficos_Screenshot_Image.png", { tolerance: 5, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(1)

});

Scenario('05-Top Clientes', () => {
    //EU ESPERO VER TOP CLIENTES E TOP PRODUTOS//

    //EU DOU UM TOUCH PARA BAIXO.
    I.performSwipe({ x: 300, y: 1778 }, { x: 300, y: 220 });
    //EU ESPERO.
    I.wait(1)
    // EU ESPERO VER O ELEMENTO TOP CLIENTES.
    I.waitForElement('#br.com.flexmobile.superv:id/clientes_title')
    //EU VEJO O ELEMENTO TOP CLIENTES.
    I.seeElement('#br.com.flexmobile.superv:id/clientes_title')
    //EU COMPARO TIRO PRINT E COMPARO COM A BASE.
    I.wait(1)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("09-1-topClientes_Screenshot_Image.png");
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("09-1-topClientes_Screenshot_Image.png", { tolerance: 5, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(1)

});

Scenario('06-Top Produtos', () => {
    //EU ESPERO VER O TOTAL CLIENTES//

    //EU DOU UM TOCH PARA BAIXO.
    I.performSwipe({ x: 300, y: 1778 }, { x: 300, y: 400 });
    //EU ESPERO
    I.wait(3)
    //EU ESPERO VER O ELEMENTO TOP PRODUTOS.
    I.waitForElement('#br.com.flexmobile.superv:id/produtos_title')
    //EU VEJO O ELEMENTO TOP PRODUTOS.
    I.seeElement('#br.com.flexmobile.superv:id/produtos_title')
    //EU ESPERO
    I.wait(1)
    // EU TIRO UMA FOTO.
    I.saveScreenshot("09-2-topProdutos_Screenshot_Image.png");
    //EU COMPARO TIRO PRINT E COMPARO COM A BASE
    I.seeVisualDiff("09-2-topProdutos_Screenshot_Image.png", { tolerance: 5, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(1)
    //EU DOU UM SCROL PARA CIMA
    I.performSwipe({ x: 920, y: 280 }, { x: 280, y: 1740 });
    //EU DOU UM SCROL PARA CIMA
    I.performSwipe({ x: 920, y: 280 }, { x: 280, y: 1740 });
    //EU DOU UM SCROL PARA CIMA
    I.performSwipe({ x: 920, y: 280 }, { x: 280, y: 1740 });
    // EU ESPERO
    I.wait(2)

}).tag("@TopProdutos");



