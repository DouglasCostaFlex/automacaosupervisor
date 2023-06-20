Feature('100-Configuracao_Preferencias').tag('@ConfigPreferencias');

const {
    CNPJ_CORRETO,  // CNPJ CORRETO
    CD_FUNC,  // CODIGO DE FUNCIONARIO CORRETO
} = require('../config.js');

const { I,clickNaTelaPage} = inject()

Scenario('01-Baixar Sincronização', () => {
    //Eu insiro CNPJ CORRETO  
    I.fillField('#br.com.flexmobile.superv:id/TFCnpj',CNPJ_CORRETO)
    //Eu insiro codigo de funcionario correto.
    I.fillField('#br.com.flexmobile.superv:id/TFCdFunc',CD_FUNC)
    //Eu clico no botao "OK"
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    //eu aguardo
    I.wait(3)
    //eu clico na posição: X,Y
    clickNaTelaPage.doClick(1015, 127)
      //eu aguardo
    I.wait(1)
     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300, 300)
      //eu aguardo
    I.wait(1)
     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300, 300)
      //eu aguardo
    I.wait(1)
      //EU TIRO UMA FOTO
    I.saveScreenshot("100-01-Baixar_Sincronizacao_Screenshot_Image.png");
    // EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("100-01-Baixar_Sincronizacao_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false});
    //eu aguardo
    I.wait(2)
    //eu aperto no botao "OK"
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    
}).tag('@BaixarConfiguracao');

Scenario('02-Inserir Config Manual', () => {

     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(1015, 127)
      //eu aguardo
    I.wait(1)
     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300, 300)
      //eu aguardo
    I.wait(1)
     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300,580)
      //eu aguardo
    I.wait(1)
    //eu clico no botao "OK"
    I.tap ("#br.com.flexmobile.superv:id/BtnOk")
      //eu aguardo
    I.wait(1)
      //EU TIRO UMA FOTO
    I.saveScreenshot("100-02-JSON_VAZIO_Screenshot_Image.png")
      //eu aguardo
    I.wait(1)
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("100-02-JSON_VAZIO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage:false})
      //eu aguardo
    I.wait(1)
    //eu aperto no botao "OK"
    I.tap("#android:id/button3")
      //eu aperto no botao "Cancelar"
    I.tap("#br.com.flexmobile.superv:id/BtnCancel")

});

Scenario('03-Config Código de  Funcionario.', () => {

     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(1015, 127)
    //eu aguardo
    I.wait(1)
     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300, 300)
    //eu aguardo
    I.wait(1)
     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300, 850)
      //EU TIRO UMA FOTO
    I.saveScreenshot("100-03-Config_Codigo_de_Funcionario_Screenshot_Image.png");
    //eu aguardo
    I.wait(1)
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("100-03-Config_Codigo_de_Funcionario_Screenshot_Image.png", {tolerance: 2, prepareBaseImage:false});
    //eu aguardo
    I.wait(1)
    //eu insiro o codigo de funcionario 101
    I.fillField("#android:id/edit","101")
    //eu aperto no botao "OK"
    I.tap("#android:id/button1")
    
});
Scenario('04-Config Apagar Banco', () => {

     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300, 1100)
      //EU TIRO UMA FOTO
    I.saveScreenshot("100-04-Apagar_Banco_Screenshot_Image.png");
    // EU COMPARO A FOTO COM A DA BASE.
    I.wait(1)
    //EU COMPARO A FOTO COM A DA BASE.
    I.seeVisualDiff("100-04-Apagar_Banco_Screenshot_Image.png", {tolerance: 2, prepareBaseImage:false});
    //eu aguardo.
    I.wait(1)
     //eu clico na posição: X,Y
    clickNaTelaPage.doClick(300, 300)
    
});