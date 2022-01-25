const bodyParser = require('body-parser');
const produtos = require('./produtosRoute');
const produtos = require('./UsuariosRoute');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(produtos)
    app.use(usuarios)
};