const express = require("express");
const path = require("path");
const morgan = require("morgan");
const serverConfig = require('./config/serverConfig');
const { Deck } = require("./db/models");
const { Card } = require("./db/models");

const app = express();
const PORT = 3000;

serverConfig(app)

// end-point
// app.get("/", (req, res) => {
//   try {
//     res.status(200).send("Ok!");
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });
app.get("/api/deck", async (req, res) => {
  try {
    const allDecks = await Deck.findAll();
    res.status(200).json(allDecks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// app.get("/Cards", async (req, res) => {
//   try {
//     const allDecks = await Card.findAll();
//     res.status(200).json(allDecks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.get("/Decks/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const choisedDeckById = await Deck.findByPk(id);
//     res.status(200).json(choisedDeckById);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.get("/Cards/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const choisedCardById = await Card.findByPk(id);
//     res.status(200).json(choisedCardById);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
app.get("/api/deck/:id/card", async (req, res) => {
  try {
    const { id } = req.params;
    const allCards = await Card.findAll({ where: { deck_id: id } });
    res.status(200).json(allCards);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Произошла ошибка при получении карточек",
        error: error.message,
      });
  }
});
// прослушивание сервера на 3000 порту
app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
