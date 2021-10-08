
async function Listpro(){
    const data = await fetch('http://localhost:3000/presupuesto');
 
    const listaPresupuesto = await data.json();
    console.log(listaPresupuesto)
    console.log(listaPresupuesto[0])
    console.log(listaPresupuesto[0][0])

    console.log(typeof(listaPresupuesto));
        
    let products = document.getElementById("products");
    
    let producto =``;
    
        for (let i = 0; i < listaPresupuesto[0].length; i++) {
            var contenedor = document.createElement("tr");
            console.log(listaPresupuesto[0][i])
        
            producto = `
            <tr>
            <td>${listaPresupuesto[0][i].id}</td>
            <td>${listaPresupuesto[0][i].fecha}</td>
            <td>${listaPresupuesto[0][i].proyecto}</td>
            <td>${listaPresupuesto[0][i].versiones}</td>
            <td class="col-0 col-sm-12 nav-item" style="display: flex; align-items: center; justify-content: center;"> 
            <a href="modificarProducts.html" style="background-color: rgb(255, 196, 0);" class="btn btn-block" ><i class="fa fa-cog"</i></i></a>            <p>.</p>
            <a href="deleteProduct.html" style="background-color: rgb(255, 196, 0);" class="btn btn-block" ><i class="fa fa-window-close"></i></i></a>

            </td>
            </tr>`;
        
            contenedor.innerHTML += producto
        products.appendChild(contenedor)

        
        }
        
}

Listpro();