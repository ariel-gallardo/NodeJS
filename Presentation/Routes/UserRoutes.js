const Express = require('express');
const Router = Express.Router();
const PrivateRouter = require('./PrivateRouter');
const {UserController} = require('../Controllers');

Router.post('/login', UserController.Login);
Router.post('/register', UserController.Register);
PrivateRouter.put('/update', UserController.Update);
PrivateRouter.delete('/delete',UserController.Delete);

module.exports = Router;