async function deleteproduct(){
    id = document.getElementById("id").value;

    let response = await fetch('http://localhost:3000/deletePresupuesto/'+id,{
    method: 'DELETE',
});
let aqui = await response.text();
console.log(aqui);

}