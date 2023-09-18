const {UserServices} = require('../../Services');

module.exports = {
    Register: async (req,res,next) => {
        const {body} = req;
        let newUser = await UserServices.RegisterUser(body);
        if(newUser) res.status(201).json(newUser);
        else res.status(400).json({error: 'Already Exists.', body});
    },
    Login: async (req,res,next) => {

    },
    Update: async (req,res,next) => {
        
    },
    Delete: async (req,res,next) => {
        
    }
};