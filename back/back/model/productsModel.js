const sequelize = require('../db/conexion');

module.exports = class productsModel {
    constructor(product){
        this.product = product;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM presupuesto");
        return result;
    }

    async add (product){
        let result = await sequelize.query("INSERT INTO presupuesto(proyecto,fecha,versiones)VALUES('"+product.proyecto+"','"+product.fecha+"','"+product.versiones+"');");
        return result;
    }
    async delete (productId){
        let result = await sequelize.query("DELETE FROM presupuesto WHERE id = " + productId+";");
        return result;
    }
    async update (product){
        let result = await sequelize.query("UPDATE presupuesto SET proyecto = '"+product.proyecto+"',fecha='"+product.fecha+"',versiones='"+product.versiones+"' WHERE id = '"+product.id+"';");
        return result;
    }

}