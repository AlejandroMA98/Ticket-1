async function agregarProductos(){
    proyecto = document.getElementById("proyecto").value;
    fecha = document.getElementById("fecha").value;
    versiones = document.getElementById("versiones").value;

    let add = {proyecto:proyecto,fecha:fecha,versiones:versiones};
    let response = await fetch('http://localhost:3000/addPresupuesto',{
    method: 'POST',
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

});
let aqui = await response.text();
console.log(aqui);
if (aqui=="presupuesto Registrado papi xdxdxdxd") {
    document.getElementById("alerta").innerHTML = "presupuesto registrado"
} else {
    document.getElementById("alerta").innerHTML = "Existe un dato que no es valido"
}

}