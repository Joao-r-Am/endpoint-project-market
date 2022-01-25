const { Router } = require('express');
const UsuariosController = require('../controller/UsuariosController');

const router = Router();

router.get('/acha-usuario', UsuariosController.achaUsuarios);

const router = Router();