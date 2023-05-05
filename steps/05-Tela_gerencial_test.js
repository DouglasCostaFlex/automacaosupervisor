Feature('Tela Gerencial').tag('@Tela_Gerencial');
const { I, clickNaTelaPage, loginPage } = inject()
const {

    CNPJ_CORRETO,  // CNPJ CORRETO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
    USUARIO_CORRETO, //USUARIO CORRETO 
    SENHA_CORRETA //SENHA CORRETA
} = require('../config.js');

Scenario('Relatorios Web', () => {
    //EU CLICO EM RELATORIOS WEB, ESPERO CARREGAR PAGINA, ESPERO PELOS DADOS NA TELA.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAteoHome(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO NO MENU.
    I.tap('~Navigate up')
    //EU CLICO EM GERENCIAL.
    I.tap('Gerencial')
    //EU DOU UM CLICK EM RELATORIOS WEB.
    clickNaTelaPage.doClick(190, 360)
    //EU ESPERO PELO ELEMENTO NA TELA.
    I.waitForElement('#mat-input-1', '100')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO
    I.saveScreenshot("16-RelatorioWeb_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("16-RelatorioWeb_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    // EU VOLTO 
    I.tap('~Navigate up')
    //EU ESPERO
    I.wait(1)

}).tag('@RelatoriosWeb');

Scenario('Lista Clientes', () => {
    //EU CLICO EM LISTA CLIENTES E ESPERO POR CLIENTES.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    // EU ESPERO.
    I.wait(1)
    //EU CLICO EM LISTA CLIENTES.
    clickNaTelaPage.doClick(550, 350)
    //EU ESPERO PELO ELEMENTO NA TELA.
    I.waitForElement('~Buscar', '200')
    //EU VEJO O ELEMENTO NA TELA.
    I.seeElement('~Buscar')
    //EU ESPERO
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("17-ListaClientes_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("17-ListaClientes_Screenshot_Image.png", { tolerance: 20, prepareBaseImage: false });
    I.wait(2)
    //EU VOLTO
    I.tap('~Navigate up')
    // EU ESPERO.
    I.wait(1)

}).tag('@ListaClientes');

Scenario('Clientes Sem Venda', () => {
    // EU CLICO EM CLIENTES SEM VENDA, ESPERO POR CLIENTES SEM VENDA//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO EM CLIENTES SEM VENDA.
    clickNaTelaPage.doClick(860, 360)
    //EU ESPERO PELO ELEMENTO 
    I.waitForElement('#br.com.flexmobile.superv:id/filtro_button', '200')
    //EU VEJO O ELEMENTO.
    I.seeElement('#br.com.flexmobile.superv:id/filtro_button')
    //EU ESPERO
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("18-ClientesSemVenda_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("18-ClientesSemVenda_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO
    I.wait(2)
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@ClientesSemVenda');

Scenario('Cliente inadiplentes', () => {
    // EU CLICO EM CLIENTES INADIPLENTES, ESPERO POR CLIENTES INADIPLENTES//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU DOU UM CLICK NA TELA.
    clickNaTelaPage.doClick(190, 550)
    //EU ESPERO PELO ELEMENTO CLIENTES
    I.waitForElement('#br.com.flexmobile.superv:id/spClientes', '200')
    //EU VEJO O ELEMENTO.
    I.seeElement('#br.com.flexmobile.superv:id/spClientes')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO
    I.saveScreenshot("19-ClientesInadiplentes_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("19-ClientesInadiplentes_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO
    I.wait(2)
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@ClienteInadiplentes');


Scenario('Minhas Metas ', () => {
    // CLICO EM METAS, ESPERO POR METAS.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO NA TELA.
    clickNaTelaPage.doClick(540, 590)
    //EU ESPERO PELO ELEMENTO VIGENTES.
    I.waitForElement('VIGENTES', 50)
    //EU ESPERO PELOS ELEMENTOS VENCIDAS.
    I.waitForElement('VENCIDAS', 50)
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("20-MinhasMetas_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("20-MinhasMetas_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    //EU APERTO.
    I.tap('VENCIDAS')
    //EU ESPERO.
    I.wait(1)
    //EU APERTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@MinhasMetas');

Scenario('Resumo por vendedor', () => {
    //CLICO EM VENDEDOR E ESPERO POR ELEMENTOS//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO NA TELA
    clickNaTelaPage.doClick(900, 600)
    //EU ESPERO PELO ELEMENTO FUNCIONARIO.
    I.waitForElement('Funcionário')
    //EU VEJO FUNCIONARIO.
    I.see('Funcionário')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("21-ResumoPorVendedor_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("21-ResumoPorVendedor_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU CLICO.
    I.wait(1)

}).tag('@ResumoPorVendedor');

Scenario('Resumo diario', () => {
    //CLICO EM RESUMO DIARIOS E ESPERO POR ELEMENTOS.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO EM RESUMO DIARIO.
    clickNaTelaPage.doClick(170, 870)
    //EU ESPERO PELO ELEMENTO RESUMO DIARIO.
    I.waitForElement('#android:id/text1', 20)
    I.seeElement('#android:id/text1')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO
    I.saveScreenshot("22-ResumoDiario_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("22-ResumoDiario_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@resumoDiario');

Scenario('Resumo devoluções', () => {
    //CLICO EM RESUMO DEVOLUÇÕES E ESPERO POR ELEMENTOS.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU ESPERO.
    I.wait(1)
    //EU CLICO NA TELA.
    clickNaTelaPage.doClick(515, 870)
    //EU ESPERO POR ELEMENTOS.
    I.waitForElement('#android:id/text1', 20)
    //EU VEJO ELEMENTO.
    I.seeElement('#android:id/text1')
    //EU ESPERO
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("23-ResumoPorDevolucao_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("23-ResumoPorDevolucao_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@ResumoDevoluçoes');

Scenario('Venda por grupo de produtos', () => {
    //EU CLICO EM VENDAS E ESPERO POR ELEMENTOS.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU ESPERO.
    I.wait(1)
    //EU CLICO NA TELA.         
    clickNaTelaPage.doClick(890, 870)
    //EU ESPERO PELO ELEMENTO.  
    I.waitForElement('Grupo', 20)
    //EU VEJO ELEMENTOS     
    I.seeElement('Grupo')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("24-VendaPorGrupoDeProdutos_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("24-VendaPorGrupoDeProdutos_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    I.wait(2)
    //EU ESPERO.
    I.tap('~Navigate up')
    //EU VOLTO.
    I.wait(1)

}).tag('@VendaPorGrupoDeProdutos');

Scenario('Vendas por linha de produto', () => {
    //EU APERTO EM VENDAS E ESPERO POR ELEMENTOS.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU ESPERO.
    I.wait(1)
    //EU CLICO NA TELA.                 
    clickNaTelaPage.doClick(270, 1100)
    //EU ESPERO POR ELEMENTOS.      
    I.waitForElement('Linha', 20)
    // EU VEJO ELEMENTOS 
    I.seeElement('Linha')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("25-VendasPorLinhaDeProduto_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("25-VendasPorLinhaDeProduto_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    // EU ESPERO.
    I.wait(2)
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@VendasPorLinhaDeProduto');

Scenario('Clientes por linha de produto', () => {
    //EU CLICO EM LINHA DE PRODUTO E ESPERO ELEMENTOS.//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO EM LINHA DE PRODUTOS     
    clickNaTelaPage.doClick(545, 1100)
    //EU ESPERO POR ELEMENTOS.                                      
    I.waitForElement('#br.com.flexmobile.superv:id/SpLinhas', 20)
    //EU VEJO ELEMENTOS.                                    
    I.seeElement('#br.com.flexmobile.superv:id/SpLinhas')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("26-ClientesEmLinhaDeProduto_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("26-ClientesEmLinhaDeProduto_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    //EU VOLTO              
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@ClientesPorLinhaDeProduto');

Scenario('Relatório de produtividade', () => {
    //EU CLICO EM RELATORIO DE PRODUTIVIDADE E ESPERO POR ELEMENTOS//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO NA TELA.                 
    clickNaTelaPage.doClick(900, 1100)
    //EU ESPERO POR ELEMENTOS.                                      
    I.waitForElement('#br.com.flexmobile.superv:id/BtnGerar', 20)
    //EU VEJO ELEMENTOS.                                    
    I.seeElement('#br.com.flexmobile.superv:id/BtnGerar')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("27-RelatorioDeProdutividade_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("27-RelatorioDeProdutividade_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    //EU APERTO NO BOTAO.
    I.tap('#br.com.flexmobile.superv:id/BtnGerar')
    //EU ESPERO.
    I.wait(1)
    //EU APERTO.            
    I.tap('~Navigate up')
    //EU VOLTO.
    I.wait(1)
    //EU VOLTO.
    I.tap('~Navigate up')
    //EU ESPERO.
    I.wait(1)

}).tag('@RelatorioDeProdutividade');

Scenario('Mostrar saldo flex', () => {
    //EU APERTO EM MOSTRAR SALDO FLEX//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO NA TELA.                 
    clickNaTelaPage.doClick(200, 1380)
    //EU ESPERO POR ELEMENTOS.                                  
    I.waitForElement('#br.com.flexmobile.superv:id/text2', 20)
    //EU VEJO ELEMENTOS                                 
    I.seeElement('#br.com.flexmobile.superv:id/text2')
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("28-MostrarSaldoFlex_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("28-MostrarSaldoFlex_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    //EU ESPERO.
    I.wait(2)
    //EU APERTO NO BOTAO.
    I.tap('#android:id/button3')
    //EU ESPERO.
    I.wait(1)

}).tag('@MostrarSaldoFlex');

Scenario('Entradas de estoque no dia', () => {
    //EU APERTO EM ENTRADAS DE ESTOQUE NO DIA E ESPERO POR ELEMENTOS//

    //CASO NAO TENHA LOGADO, IRA ABRIR O LOGIN NOVAMENTE.
    tryTo(() => loginPage.doLoginIniciarNovamenteAtéoGerencial(CNPJ_CORRETO, CD_FUNC, USUARIO_CORRETO, SENHA_CORRETA))

    //EU CLICO NA TELA.
    clickNaTelaPage.doClick(540, 1380)
    //ESPERO POR ELEMENTOS.
    I.waitForElement('#br.com.flexmobile.superv:id/btnProsseguir', 20)
    //EU VEJO ELEMENTOS.
    I.seeElement('#br.com.flexmobile.superv:id/btnProsseguir')
    //EU APERTO NO BOTAO.
    I.tap('#br.com.flexmobile.superv:id/btnProsseguir')
    // EU ESPERO POR ELEMENTOS.
    I.waitForElement('#br.com.flexmobile.superv:id/btnSinc', 200)
    //EU ESPERO.
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("29-EntradasDeEstoqueNoDia_Screenshot_Image.png");
    //EU COMPARO O PRINT COM O A IMAGEM BASE
    I.seeVisualDiff("29-EntradasDeEstoqueNoDia_Screenshot_Image.png", { tolerance: 4, prepareBaseImage: false });
    // EU ESPERO
    I.wait(4)
    //EU APERTO NO BOTAO
    I.tap('#br.com.flexmobile.superv:id/btnSinc')
    //EU ESPERO PELO ELEMENTO MENU
    I.waitForElement('~Navigate up', 300)
    //EU APERTO.
    I.tap('~Navigate up')
    // ESPERO.
    I.wait(2)

}).tag('@EntradasDeEstoqueNoDia');
