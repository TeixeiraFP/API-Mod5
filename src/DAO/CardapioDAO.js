class CardapioDAO {
  constructor(db) {
    this.db = db;
  }

  TodoCardapio() {
    return new Promise((resolve, reject) => {
      this.db.all("Select * from CARDAPIO", (err, rows) => {
        if (err) {
          reject(`Erro ao acessar o BD.${err}`);
        } else {
          resolve(rows);
        }
      });
    });
  }
  ItemCardapio(nome) {
    return new Promise((resolve, reject) => {
      this.db.get(
        "select * from CARDAPIO where NOME = (?)",
        nome,
        (err, row) => {
          if (err) {
            reject(`Erro ao acessar o BD. ${err}`);
          } else {
            resolve(row);
          }
        }
      );
    });
  }
}

module.exports = CardapioDAO;
