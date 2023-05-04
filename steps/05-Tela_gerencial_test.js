Feature('Tela Gerencial').tag('@Tela_Gerencial');
const { I, clickNaTelaPage, loginPage } = inject()
const {

    CNPJ_CORRETO,  // CNPJ ERRADO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

Scenario('Relatorios Web', () => {

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU CLICO EM RELATORIOS WEB, ESPERO CARREGAR PAGINA, ESPERO PELOS DADOS NA TELA.
    I.tap('~Navigate up')
    I.tap('Gerencial')
    clickNaTelaPage.doClick(190, 360)
    I.waitForElement('#mat-input-1', '100')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("16-RelatorioWeb_Screenshot_Image.png");
    I.seeVisualDiff("16-RelatorioWeb_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)
}).tag('@RelatoriosWeb');

Scenario('Lista Clientes', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    //EU CLICO EM LISTA CLIENTES E ESPERO POR CLIENTES.
    I.wait(1)
    clickNaTelaPage.doClick(550, 350)
    I.waitForElement('~Buscar', '200')
    I.seeElement('~Buscar')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("17-ListaClientes_Screenshot_Image.png");
    I.seeVisualDiff("17-ListaClientes_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)
}).tag('@ListaClientes');

Scenario('Clientes Sem Venda', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    // EU CLICO EM CLIENTES SEM VENDA, ESPERO POR CLIENTES.
    clickNaTelaPage.doClick(860, 360)
    I.waitForElement('#br.com.flexmobile.superv:id/filtro_button', '200')
    I.seeElement('#br.com.flexmobile.superv:id/filtro_button')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("18-ClientesSemVenda_Screenshot_Image.png");
    I.seeVisualDiff("18-ClientesSemVenda_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)
}).tag('@ClientesSemVenda');

Scenario('Cliente inadiplentes', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    // EU CLICO EM CLIENTES INADIPLENTES, ESPERO POR CLIENTES.
    clickNaTelaPage.doClick(190, 550)
    I.waitForElement('#br.com.flexmobile.superv:id/spClientes', '200')
    I.seeElement('#br.com.flexmobile.superv:id/spClientes')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("19-ClientesInadiplentes_Screenshot_Image.png");
    I.seeVisualDiff("19-ClientesInadiplentes_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)
}).tag('@ClienteInadiplentes');


Scenario('Minhas Metas ', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    // CLICO EM METAS, ESPERO POR METAS.
    clickNaTelaPage.doClick(540, 590)
    I.waitForElement('VIGENTES', 50)
    I.waitForElement('VENCIDAS', 50)
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("20-MinhasMetas_Screenshot_Image.png");
    I.seeVisualDiff("20-MinhasMetas_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('VENCIDAS')
    I.wait(1)
    I.tap('~Navigate up')
    I.wait(1)

}).tag('@MinhasMetas');

Scenario('Resumo por vendedor', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    clickNaTelaPage.doClick(900, 600)
    I.waitForElement('Funcionário')
    I.see('Funcionário')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("21-ResumoPorVendedor_Screenshot_Image.png");
    I.seeVisualDiff("21-ResumoPorVendedor_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)
}).tag('@ResumoPorVendedor');

Scenario('Resumo diario', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    clickNaTelaPage.doClick(170, 870)
    I.waitForElement('#android:id/text1', 20)
    I.seeElement('#android:id/text1')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("22-ResumoDiario_Screenshot_Image.png");
    I.seeVisualDiff("22-ResumoDiario_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)

}).tag('@resumoDiario');

Scenario('Resumo devoluções', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    I.wait(1)
    clickNaTelaPage.doClick(515, 870)
    I.waitForElement('#android:id/text1', 20)
    I.seeElement('#android:id/text1')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("23-ResumoPorDevolucao_Screenshot_Image.png");
    I.seeVisualDiff("23-ResumoPorDevolucao_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)

}).tag('@ResumoDevoluçoes');

Scenario('Venda por grupo de produtos', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    I.wait(1)
    clickNaTelaPage.doClick(890, 870)
    I.waitForElement('Grupo', 20)
    I.seeElement('Grupo')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("24-VendaPorGrupoDeProdutos_Screenshot_Image.png");
    I.seeVisualDiff("24-VendaPorGrupoDeProdutos_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)


}).tag('@VendaPorGrupoDeProdutos');

Scenario('Vendas por linha de produto', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    I.wait(1)
    clickNaTelaPage.doClick(270, 1100)
    I.waitForElement('Linha', 20)
    I.seeElement('Linha')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("25-VendasPorLinhaDeProduto_Screenshot_Image.png");
    I.seeVisualDiff("25-VendasPorLinhaDeProduto_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)

}).tag('@VendasPorLinhaDeProduto');

Scenario('Clientes por linha de produto', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    clickNaTelaPage.doClick(545, 1100)
    I.waitForElement('#br.com.flexmobile.superv:id/SpLinhas', 20)
    I.seeElement('#br.com.flexmobile.superv:id/SpLinhas')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("26-ClientesEmLinhaDeProduto_Screenshot_Image.png");
    I.seeVisualDiff("26-ClientesEmLinhaDeProduto_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('~Navigate up')
    I.wait(1)

}).tag('@ClientesPorLinhaDeProduto');

Scenario('Relatório de produtividade', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    clickNaTelaPage.doClick(900, 1100)
    I.waitForElement('#br.com.flexmobile.superv:id/BtnGerar', 20)
    I.seeElement('#br.com.flexmobile.superv:id/BtnGerar')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("27-RelatorioDeProdutividade_Screenshot_Image.png");
    I.seeVisualDiff("27-RelatorioDeProdutividade_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('#br.com.flexmobile.superv:id/BtnGerar')
    I.wait(1)
    I.tap('~Navigate up')
    I.wait(1)
    I.tap('~Navigate up')
    I.wait(1)

}).tag('@RelatorioDeProdutividade');

Scenario('Mostrar saldo flex', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    clickNaTelaPage.doClick(200, 1380)
    I.waitForElement('#br.com.flexmobile.superv:id/text2', 20)
    I.seeElement('#br.com.flexmobile.superv:id/text2')
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("28-MostrarSaldoFlex_Screenshot_Image.png");
    I.seeVisualDiff("28-MostrarSaldoFlex_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.tap('#android:id/button3')
    I.wait(1)
}).tag('@MostrarSaldoFlex');

Scenario('Entradas de estoque no dia', () => {

    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))
    clickNaTelaPage.doClick(540, 1380)
    I.waitForElement('#br.com.flexmobile.superv:id/btnProsseguir', 20)
    I.seeElement('#br.com.flexmobile.superv:id/btnProsseguir')
    I.tap('#br.com.flexmobile.superv:id/btnProsseguir')
    I.waitForElement('#br.com.flexmobile.superv:id/btnSinc', 200)
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.wait(2)
    I.saveScreenshot("29-EntradasDeEstoqueNoDia_Screenshot_Image.png");
    I.seeVisualDiff("29-EntradasDeEstoqueNoDia_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    I.wait(2)
    I.tap('#br.com.flexmobile.superv:id/btnSinc')
    I.waitForElement('~Navigate up', 300)
    I.tap('~Navigate up')
    I.wait(2)

}).tag('@EntradasDeEstoqueNoDia');
