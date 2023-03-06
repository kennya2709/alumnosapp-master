const express = require('express');
//Se crean las rutas
const router = express.Router();
//Se obtienen los controladores
const userCtrl = require("../controllers/users.controllers");

router.get("/", userCtrl.findAllUsers);