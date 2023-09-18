const Express = require('express');
const App = Express();
const Routes = require('./Routes');
const Http = require('http');
const {APP_PORT} = require('dotenv').config().parsed;

App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));

App.use('/user',Routes.UserRoutes); 
 
Http.createServer(App).listen(APP_PORT);
 