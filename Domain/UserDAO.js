const {Models: {UserModel}} = require('../Data');
const FindByEmail = async (correo) => await UserModel.findOne({where: {correo: correo, active: true}});
const Exists = async (correo) => await FindByEmail(correo) != null;
const Create = async (data) => {
    let newUser = await UserModel.create(data);
    return newUser;
};

module.exports = {
    FindByEmail,
    Exists,
    Create
}