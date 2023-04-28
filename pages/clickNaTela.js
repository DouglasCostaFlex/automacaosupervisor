const { I } = inject();

module.exports = {

  async doClick(x, y,) {
    // Utilizando a função I.touchPerform() para executar o scroll
    await I.touchPerform([
        {
            action: 'tap',
            options: { x: x, y: y }
        }, { action: 'release' }]);
  }
}
