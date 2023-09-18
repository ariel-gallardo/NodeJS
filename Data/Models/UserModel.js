const {Sequelize, Model, DataTypes} = require('../Sequelize');
class UserModel extends Model{};

UserModel.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    }, 
    correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
}, {sequelize: Sequelize, tableName: 'usuarios'});
UserModel.sync(); 
module.exports = UserModel;