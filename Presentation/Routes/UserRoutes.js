const Express = require('express');
const Router = Express.Router();
const {UserController} = require('../Controllers');

Router.post('/login', UserController.Login);
Router.post('/register', UserController.Register);
Router.put('/update', UserController.Update);
Router.delete('/delete',UserController.Delete);

module.exports = Router;