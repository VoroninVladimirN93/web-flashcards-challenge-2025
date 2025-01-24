const router = require('express').Router();
const formatResponse = require('../../utils/formatResponse');
const { Card, Deck } = require('../../db/models');

// CRUD


// app.use('/', indexRouter);
// end-point
// app.get("/", (req, res) => {
//   try {
//     res.status(200).send("Ok!");
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });
// app.get("/api/deck", async (req, res) => {
//   try {
//     const allDecks = await Deck.findAll();
//     res.status(200).json(allDecks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
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
// app.get("/api/deck/:id/card", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const allCards = await Card.findAll({ where: { deck_id: id } });
//     res.status(200).json(allCards);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({
//         message: "Произошла ошибка при получении карточек",
//         error: error.message,
//       });
//   }
// });


// /api/tasks
router.route('/')
    .get(async (req, res) => {
        try {
            const allDecks = await Deck.findAll();
            res.status(200).json(formatResponse(200, 'Let`s ROCK', allDecks))
        } catch (error) {
            res.status(404).json(formatResponse(400, 'Error', null, error.message))
        }
    })

// /api/tasks/3
// /api/tasks/4
router.route('/:id/card')
    // Update
    .get(async (req,res) => {
        try {
            const { id } = req.params;
            const allCards = await Card.findAll();
            if (allCards.lenght === 0 ) {
                res.status(204).json(formatResponse(204, 'No content'))
            } else {
                res.status(200).json(formatResponse(200, 'LET`S GOOO', allCards))
            }

    } catch (error) {
        res.status(404).json(formatResponse(400, 'Error', null, error.message))
    }})
    // .put()
    // // Delete
    // .delete(async (req, res) => {
    //     try {
    //         const { id } = req.params;

    //         const deleteTask = await Task.destroy({ where: { id } })

    //         if (deleteTask) {
    //             res.status(200).json(formatResponse(200, 'Deleted'))
    //         } else {
    //             res.status(404).json(formatResponse(404, 'No task'))
    //         }
    //     } catch (error) {
    //         res.status(404).json(formatResponse(400, 'Error', null, error.message))
    //     }
    // })

module.exports = router;