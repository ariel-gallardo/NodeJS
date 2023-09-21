const {UserDao} = require('../Domain');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RegisterUser = async (req) => {
    if(await UserDao.Exists(req.correo)) return false;

    const userModel = {
        correo: req.correo,
        password: await bcrypt.hash(req.password,await bcrypt.genSalt(10)),
        nombre: req.nombre,
        apellido: req.apellido
    };

    return  await UserDao.Create(userModel);
}

const LoginUser = async (req) => {
    if(!(await UserDao.Exists(req.correo))) return null;
    let u = await UserDao.FindByEmail(req.correo);
    if(await bcrypt.compare(req.password,u.password))
    return `Bearer ${jwt.sign({
        id: u.id,
        correo: u.correo,
        nombre: u.nombre,
        apellido: u.apellido
    },process.env.TOKEN_SECRET)}`;
    
    return null;
}

module.exports = {
    RegisterUser,
    LoginUser
}