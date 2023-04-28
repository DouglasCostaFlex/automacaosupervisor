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
    I.fillField(this.fields.CNPJ, CNPJ)
    I.fillField(this.fields.CODFUNC, CODFUNC)
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    I.waitForElement('#android:id/message', 5)
    I.tap('#android:id/button3')
  },

  doLoginCNPJcorreto(CNPJ, CODFUNC) {
    I.fillField(this.fields.CNPJ, CNPJ)
    I.fillField(this.fields.CODFUNC, CODFUNC)
    I.tap('#br.com.flexmobile.superv:id/BtnOk')
    I.wait(4)
  },

  doLoginUserErrado(CDFUNC, SENHA) {
    I.fillField(this.fields.CDFUNC, CDFUNC)
    I.fillField(this.fields.SENHA, SENHA)
    I.tap('#br.com.flexmobile.superv:id/BTNLogin')
    I.waitForElement('#android:id/button3', 10)
    I.tap('#android:id/button3')
  },
  doLoginUserCorreto(CDFUNC, SENHA) {
    I.fillField(this.fields.CDFUNC, CDFUNC)
    I.fillField(this.fields.SENHA, SENHA)
    I.wait(4)
    I.tap('#br.com.flexmobile.superv:id/BTNLogin');
    I.wait(4);
    tryTo(() => I.tap('#android:id/button1'));
    I.waitForElement('~Navigate up', 300);
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
    I.waitForElement('~Navigate up', 300);
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
    I.waitForElement('~Navigate up', 300);
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
    I.waitForElement('~Navigate up', 300)
    I.tap('~Navigate up')
    I.tap('Vendedores')

  }

}
