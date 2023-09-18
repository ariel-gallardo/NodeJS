const {Sequelize, DataTypes, Model} = require('sequelize');
const {DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_DIALECT} = require('dotenv').config().parsed;
 
const _Sequelize = DB_DATABASE ? 
    new Sequelize({
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_DATABASE,
            dialect:  DB_DIALECT
        })
    : new Sequelize('sqlite::memory:');

module.exports = {
    Sequelize: _Sequelize,
    DataTypes,
    Model
};