const Express = require('express');
const PrivateRouter = Express.Router();
const {AuthMiddleware} = require('../Middlewares');

PrivateRouter.use(AuthMiddleware);

module.exports = PrivateRouter;