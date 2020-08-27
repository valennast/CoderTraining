
/* Variables a Utilizar */

/* Constantes para almacenar los precios segun tipo de vehiculos */

const precioPorCamioneta= 1500;
const precioPorAuto= 1000;

/* Constantes para almacenar los precios de las marca */

const precioMarcaFord = 250;
const precioMarcaPeugeot = 300;
const precioMarcaVolkswagen = 350;
const precioMarcaToyota = 400;

/* Constantes para almacenar los precios segun cobertura */

const precioCoberturaCompleta = 250;
const precioCoberturaSimple = 300;
const precioCoberturaSimpleGranizo = 350;
const precioCoberturaSimpleRuedas = 400;

/* Arrays a utilizar para interacturar con el html */
/* COMPLETO LOS SELECT DEL HTML */

var listadoTiposVehiculos=['Elegir Tipo de Vehiculo','Camioneta','Auto'];
var listadoMarcaVehiculos=['Elegir Marca','Ford','Toyota','Peugeot','Volkswagen'];
var listadoCoberturaVehiculos=['Elegir Cobertura','Completo','Simple','Simple con granizo','Simple con ruedas'];

llenarSelects(listadoMarcaVehiculos,"marcaVehiculo");
llenarSelects(listadoCoberturaVehiculos,"coberturaVehiculo");
llenarSelects(listadoTiposVehiculos,"tipoVehiculo");

function llenarSelects(listadoArray,idListado){
    const listaHtml = document.getElementById(idListado);
    for (var i = 0; i < listadoArray.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = listadoArray[i];
        opcion.text = listadoArray[i];
        listaHtml.appendChild(opcion);
        }  
}
/* COMPLETO LOS SELECT DE AÑOS DEL HTML (SOLO QUIERO COTIZAR LOS AUTOS CON UN MAX 5 AÑOS DE ANTIGUEDAD) */
const max = new Date().getFullYear();
const min = max - 5;
const selectAñiosVehiculo = document.getElementById('añoVehiculo');
      for(let i = max; i > min; i--) {
           let option = document.createElement('option');
           option.value = i;
           option.innerHTML = i;
           selectAñiosVehiculo.appendChild(option);
      }      

/*  Objeto   */
class PolizaSeguro {
    constructor(tipoDeVehiculo, añoModelo, marca, cobertura) {
        this.precioTipoVehiculo = tipoDeVehiculo;
        this.precioañoModelo = añoModelo;
        this.precioMarcaVehiculo = marca;
        this.precioCoberturaVehiculo = cobertura;
    }
}

const formularioPoliza = document.getElementById('cotizar');

/* formularioPoliza.addEventListener('click', function(){
    alert('');
}) */

formularioPoliza.addEventListener('click', function(){
    
    const vehiculo = document.getElementById('tipoVehiculo');
    const tipoVehiculoSelect = vehiculo.options[vehiculo.selectedIndex].value;
    
    const año = document.getElementById('añoVehiculo');
    const añoSelect = año.options[año.selectedIndex].value;
    
    const marca = document.getElementById('marcaVehiculo');
    const marcaSelect = marca.options[marca.selectedIndex].value;
    
    const cobertura = document.getElementById('coberturaVehiculo');
    const coberturaSelect = cobertura.options[cobertura.selectedIndex].value;
    
    /* const poliza = new PolizaSeguro(tipoVehiculoSelect,añoSelect,marcaSelect,coberturaSelect) */


    /* alert('Se ha enviado con éxito su poliza'); */
});