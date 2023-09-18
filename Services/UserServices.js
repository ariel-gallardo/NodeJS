const {DAO: {UserDao}} = require('../Domain');

const RegisterUser = async (req) => {
    if(await UserDao.Exists(req.correo)) return false;

    const userModel = {
        correo: req.correo,
        password: req.password,
        nombre: req.nombre,
        apellido: req.apellido
    };
    
    return  await UserDao.Create(userModel);
}

const LoginUser = async (req) => {
    if(await UserDao.Exists(req.correo)) return null;
    return await UserDao.FindByEmail(req.correo);
}

module.exports = {
    RegisterUser,
    LoginUser
}