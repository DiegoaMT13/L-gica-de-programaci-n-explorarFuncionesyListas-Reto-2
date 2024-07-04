

function asignartextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

}

asignartextoElemento("h1","Desafío: hora de practicar Reto 2");
asignartextoElemento("p","Ingresa numero a duplicar");
 
function saludoInicial(){
    console.log("¡Hola, mundo!");
    return;
}
saludoInicial();


function nombreUsuario() {
    const ingresoNombre = prompt("Ingresa tu nombre");
    console.log(`¡Hola, ${ingresoNombre}!`);
    asignartextoElemento("h2",`¡Hola, ${ingresoNombre}!`);
    return;
}

nombreUsuario("");

function BotonDuplica(){
    let numeroIngreso = document.getElementById(`numeroDuplicado`).value;
    let resultado = numeroIngreso * 2;
    asignartextoElemento("h3","Resultado es: " + resultado);
    return;
}
   
function BotonPromedio(){
    var numeroIngresoPromedio1 = document.getElementById("ingresoNumero1").value;
    var numeroIngresoPromedio2 = document.getElementById("ingresoNumero2").value;
    var numeroIngresoPromedio3 = document.getElementById("ingresoNumero3").value;
    var sumarCampos = parseInt(numeroIngresoPromedio1) + parseInt(numeroIngresoPromedio2) + parseInt(numeroIngresoPromedio3);
    var dividirCampos = sumarCampos / 3;
    var resultadoPromedio = dividirCampos
    asignartextoElemento("h5","Promedio es: " + resultadoPromedio);
       
}

function BotonParametroMayor(){
    var IngresoParametro1 = document.getElementById("ingresoNumeroParametros1").value;
    var IngresoParametro2 = document.getElementById("ingresoNumeroParametros2").value;
    if (IngresoParametro1 > IngresoParametro2){
        asignartextoElemento("h6","El mayor es: " + IngresoParametro1 );
        
    }else
        asignartextoElemento("h6","El mayor es: " + IngresoParametro2 );
}

function BotonMultiplica(){
    var numeroPor= document.getElementById("ingreso NumeroMultiplica").value;
    var multiplicaPorelmismo = numeroPor * numeroPor;
    var resultadoPor = multiplicaPorelmismo
    asignartextoElemento("h7","Resultado es: " + resultadoPor);
}