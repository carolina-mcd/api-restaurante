const express = require('express');
const routes = require('./routes');

const app = express();

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    next()
})
app.use(express.json());
app.use(routes)

module.exports = app