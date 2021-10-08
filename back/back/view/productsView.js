const productController = require('../controller/productsController')
const midd = require('../middlewares/midd');

module.exports = async (app) => {
    // app.get('/products',midd.middAutentication, async(req,res) => {
    //     res.send(await productController.listProducts());
        
    // });
    app.get('/presupuesto', async(req,res) => {
        res.send(await productController.listProducts());
    });

    app.post('/addPresupuesto',async(req,res) => {
        let product = req.body;
        res.send(await productController.addProduct(product));
    });
    app.patch('/updatePresupuesto',async(req,res) => {
        let product = req.body;
        res.send(await productController.updateproduct(product));
    });
    app.delete('/deletePresupuesto/:id', async(req,res)=>{
        let productId = req.params.id
        res.send(await productController.deleteproduct(productId));
    });
};
