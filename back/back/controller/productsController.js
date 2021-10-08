const productsModel = require('../model/productsModel');

module.exports.listProducts = async () => {
    let response = new productsModel();
    let result = await response.list();
    return result;
}

module.exports.addProduct = async (product) => {
    let response = new productsModel();
    let data = await response.add(product);
    if(data){
        return "presupuesto Registrado papi xdxdxdxd"
    }else{
        return "Nel mijo intentalo de nuevo"
    }
}
module.exports.deleteproduct = async (productId) => {
    let response = new productsModel();
    let result = await response.delete(productId);
    if(!result){
        return "ocurrio un error"
    }else{
        
        return result,"el registro no existe o fue eliminado";
    }
   
}
module.exports.updateproduct = async (product) => {
    let response = new productsModel();
    let data = await response.update(product);
    if(data){
        return "Presupuesto Actualizado papi xdxdxdxd"
    }else{
        return "Nel mijo intentalo de nuevo"
    }
}