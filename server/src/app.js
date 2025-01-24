const express = require("express");
// const path = require("path");
// const morgan = require("morgan");
const serverConfig = require('./config/serverConfig');
const { Deck } = require("./db/models");
const { Card } = require("./db/models");
const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

serverConfig(app)

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
