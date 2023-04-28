const { I } = inject();

module.exports = {

  // Criando o método para realizar o scroll
  async doScrol(x, y, X, Y) {
    // Utilizando a função I.touchPerform() para executar o scroll
    await I.touchPerform([
      {
        action: 'longPress',
        options: {
          x: x,
          y: y,
        },
      },
      {
        action: 'moveTo',
        options: {
          x: X,
          y: Y,
        },
      },
      { action: 'release' },
    ]);
  }
}


