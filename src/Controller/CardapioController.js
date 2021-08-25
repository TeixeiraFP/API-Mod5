const CardapioDAO = require("../DAO/CardapioDAO");

module.exports = (app, db) => {
  const BancoCardapio = new CardapioDAO(db);

  app.get("/Cardapio", async (req, res) => {
    try {
      const resposta = await BancoCardapio.TodoCardapio();
      res.json({
        result: resposta,
        error: false,
      });
    } catch {
      res.send("Erro ao mostrar o cardápio");
    }
  });
  app.get("/Cardapio/:NOME", async (req, res) => {
    try {
      const nome = req.params.NOME;

      const resposta = await BancoCardapio.ItemCardapio(nome);

      res.json({
        result: resposta,
        error: false,
      });
    } catch {
      res.send("Erro ao mostrar o cardápio");
    }
  });
};
