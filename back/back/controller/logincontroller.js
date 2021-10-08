const jwt = require('jsonwebtoken')
const loginModel = require('../model/loginModel')

module.exports.login = async (user) =>{
    let login = new loginModel();
    let data = await login.find(user)
    if(data){
        let token = jwt.sign({data},process.env.SECRETKEY)
        return token  
    }else{
        return "No se encontro usuario"
    }
}


module.exports.addUser = async (user) => {
    let response = new loginModel();
    let data = await response.add(user);
    if(data){
        return "Usuario Registrado papi xdxdxdxd"
    }else{
        return "Nel mijo intentalo de nuevo"
    }
}