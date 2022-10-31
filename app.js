

const $nombre = document.getElementById("nombre"); 
const $apellido = document.getElementById("apellido"); 
const $cantidad = document.getElementById("cantidad"); 
const $categoria = document.getElementById("categoria"); 
const $total = document.getElementById("total"); 

document.forms[0].addEventListener("submit", (e)=>{
e.preventDefault();

console.log($categoria);
let descuento=.8;
switch ($categoria.value) {
    case "1":
        descuento=0.2;
        break;
    case "2":
        descuento=0.5;
        break;
    case "3":
        descuento=0.85;
        break;
}
console.log($categoria.value + " cantidad: " + $cantidad.value)
$total.value="Total a Pagar: $" +200*$cantidad.value*descuento;

});