const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const removeXPowered = require('../middleware/removeXPowered');
const cors = require('cors');

// Конфигурация стрима для логов
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' })

const serverConfig = (app) => {
    // Парсинг тела формы
    app.use(express.urlencoded({ extended: true }))

    // Парсинг формата JSON
    app.use(express.json())

    // Статические файлы из папки public
    app.use(express.static(path.join(__dirname, '../public')));

    // Логирование запросов
    app.use(morgan('combined', { stream: accessLogStream }))

    // Удаление HTTP заголовка "X-Powered-By"
    app.use(removeXPowered)

    // CORS
    app.use(cors())
}

module.exports = serverConfig;