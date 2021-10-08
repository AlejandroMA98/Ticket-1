const sequelize = require('../db/conexion');

module.exports = class loginsModel {
    constructor(login){
        this.login = login
    }
   
    async find (user){
        let result = await sequelize.query("SELECT * FROM adm WHERE email = '"+user.email+"' AND pass = '"+user.pass+"';");
        if(result!=0){
            return result[0][0]
        }else{
            return "No se encuentra"
        }      
        
    }

    async add (user){
        let result = await sequelize.query("INSERT INTO adm(nombre,email,pass)VALUES('"+user.nombre+"','"+user.email+"','"+user.pass+"');");
        return result;
    }
    
}