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

const { I } = inject();

module.exports = {

  fields: {
    CNPJ: '#br.com.flexmobile.superv:id/TFCnpj',   //ID FIELD CNPJ
    CODFUNC: '#br.com.flexmobile.superv:id/TFCdFunc', // ID  FIELD CODIGO DO FUNCIONARIO
    CDFUNC: '#br.com.flexmobile.superv:id/user', //ID CODIGO DE USUARIO
    SENHA: '#br.com.flexmobile.superv:id/pass' //ID SENHA DE USUARIO
  },
  buttons: {
    enter: '#br.com.flexmobile.superv:id/BTNLogin',
  },

  doLoginCNPJerrado(CNPJ, CODFUNC) {
    //EU COLOCO O CNPJ NO CAMPO 
    I.fillField(this.fields.CNPJ, CNPJ)
    //EU COLOCO O CODIGO DE FUNCIONARIO
    I.fillField(this.fields.CODFUNC, CODFUNC)
    //EU APERTO NO BOTAO
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    //EU ESPERO PELO ELEMENTO NA TELA
    I.waitForElement('#android:id/message', 50)
    // EU TIRO UMA FOTO.
    I.saveScreenshot("01-CNPJ_ERRADO_Screenshot_Image.png");
    // EU COMPARO A FOTO COM A FOTO BASE
    I.seeVisualDiff("01-CNPJ_ERRADO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false});
    //EU APERTO NO BOTAO
    I.tap('#android:id/button3')
  },

  doLoginCNPJcorreto(CNPJ, CODFUNC) {
    //EU COLOCO O CNPJ CORRETO.
    I.fillField(this.fields.CNPJ, CNPJ)
    //EU COLOCO O CODIGO DE FUNCIONARIO
    I.fillField(this.fields.CODFUNC, CODFUNC)
    //EU APERTO NO BOTAO .
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    //EU ESPERO.
    I.wait(4)
  },

  doLoginUserErrado(CDFUNC, SENHA) {
    //EU COLOCO O CODIGO DE FUNCIONARIO.
    I.fillField(this.fields.CDFUNC, CDFUNC)
    //EU COLOCO A SENHA.
    I.fillField(this.fields.SENHA, SENHA)
    //EU APERTO NO BOTAO.
    I.tap('#br.com.flexmobile.superv:id/BTNLogin')
  },
  doLoginUserCorreto(CDFUNC, SENHA) {
    // EU COLOCO CODIGO DE FUNCIONARIO.
    I.fillField(this.fields.CDFUNC, CDFUNC)
    //EU COLOCO A SENHA 
    I.fillField(this.fields.SENHA, SENHA)
    //EU ESPERO.
    I.wait(4)
<<<<<<< Updated upstream
    //EU APERTO NO BOTAO
    I.tap('#br.com.flexmobile.superv:id/BTNLogin');
    //EU ESPERO.
    I.wait(4);
    //CASO APAREÇA MENSAGEM DE ATUALIZAR, IRA APERTAR.
    tryTo(() => I.tap('#android:id/button1'));
    //EU ESPERO PELO ELEMENTO HOME
    I.waitForElement('~Navigate up', 1200);
    //EU ESPERO
=======
    I.tap('#br.com.flexmobile.superv:id/BTNLogin')
    I.wait(4)
    // tryTo(() => I.tap('#android:id/button1'))
    I.waitForElement('~Navigate up', 1200)
>>>>>>> Stashed changes
    I.wait(2)
    //EU TIRO UMA FOTO.
    I.saveScreenshot("04-HOME_Screenshot_Image.png");
<<<<<<< Updated upstream
    //EU COMPARO COM A BASE.
    I.seeVisualDiff("04-HOME_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false});
=======
    I.seeVisualDiff("04-HOME_Screenshot_Image.png", {tolerance: 5, prepareBaseImage: false})
>>>>>>> Stashed changes
  },

  doLoginIniciarNovamenteAteoHome(CNPJ, CODFUNC, CDFUNC, SENHA) {
    I.fillField(this.fields.CNPJ, CNPJ)
    I.fillField(this.fields.CODFUNC, CODFUNC)
    I.wait(2)
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    I.wait(3)
    I.fillField(this.fields.CDFUNC, CDFUNC)
    I.fillField(this.fields.SENHA, SENHA)
    I.tap('#br.com.flexmobile.superv:id/BTNLogin');
    I.wait(2);
    tryTo(() => I.tap('#android:id/button1'));
    I.waitForElement('~Navigate up', 800);
  },
  doLoginIniciarNovamenteAtéoGerencial(CNPJ, CODFUNC, CDFUNC, SENHA) {
    I.fillField(this.fields.CNPJ, CNPJ)
    I.fillField(this.fields.CODFUNC, CODFUNC)
    I.wait(2)
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    I.wait(3)
    I.fillField(this.fields.CDFUNC, CDFUNC)
    I.fillField(this.fields.SENHA, SENHA)
    I.tap('#br.com.flexmobile.superv:id/BTNLogin');
    I.wait(2);
    tryTo(() => I.tap('#android:id/button1'));
    I.waitForElement('~Navigate up', 600);
    I.tap('~Navigate up')
    I.tap('Gerencial')
  },

  doLoginIniciarNovamenteAteoVendedores(CNPJ, CODFUNC, CDFUNC, SENHA) {
    I.fillField(this.fields.CNPJ, CNPJ)
    I.fillField(this.fields.CODFUNC, CODFUNC)
    I.wait(2)
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    I.wait(3)
    I.fillField(this.fields.CDFUNC, CDFUNC)
    I.fillField(this.fields.SENHA, SENHA)
    I.tap('#br.com.flexmobile.superv:id/BTNLogin');
    I.wait(2);
    tryTo(() => I.tap('#android:id/button1'));
    I.waitForElement('~Navigate up', 600)
    I.tap('~Navigate up')
    I.tap('Vendedores')

  }

}
