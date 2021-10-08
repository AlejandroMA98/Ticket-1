
async function updateproducts(){
    id = document.getElementById("id").value;
    proyecto = document.getElementById("proyecto").value;
    fecha = document.getElementById("fecha").value;
    versiones = document.getElementById("versiones").value;

    let update = {id:id, proyecto:proyecto, fecha:fecha, versiones:versiones};
    let response = await fetch('http://localhost:3000/updatePresupuesto',{
    method: 'PATCH',
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(update)

});
let aqui = await response.text();
console.log(aqui);

}