
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

const precioCoberturaCompleta = 750;
const precioCoberturaSimple = 300;
const precioCoberturaSimpleGranizo = 350;
const precioCoberturaSimpleRuedas = 400;

/* Arrays a utilizar para interacturar con el html */
/* COMPLETO LOS SELECT DEL HTML */

var listadoTiposVehiculos=['Camioneta','Auto'];
var listadoMarcaVehiculos=['Ford','Toyota','Peugeot','Volkswagen'];
var listadoCoberturaVehiculos=['Completo','Simple','Simple con granizo','Simple con ruedas'];

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
        this.tipoDeVehiculo = tipoDeVehiculo;
        this.añoVehiculo = añoModelo;
        this.marcaVehiculo = marca;
        this.coberturaVehiculo = cobertura;
    }
    cotizarSeguro(){
        
        let precioTipoVehiculo;
        let precioañoModelo;
        let precioMarcaVehiculo;
        let precioCoberturaVehiculo;
        let precioTotal;

        if (this.tipoDeVehiculo=='Auto'){
            precioTipoVehiculo=1000;
        }else if (this.tipoDeVehiculo=='Camioneta'){
            precioTipoVehiculo=1500;
        }else{
            alert('La opcion elegida no es valida');
        }

        if (this.marcaVehiculo=='Ford'){
            precioMarcaVehiculo=precioMarcaFord;
        }else if(this.marcaVehiculo=='Toyota'){
            precioMarcaVehiculo=precioMarcaToyota;
        }else if(this.marcaVehiculo=='Peugeot'){
            precioMarcaVehiculo=precioMarcaPeugeot;
        }else if(this.marcaVehiculo=='Volkswagen'){
            precioMarcaVehiculo=precioMarcaVolkswagen;
        }else{
            alert('La opcion elegida no es valida');
        }

        if (this.coberturaVehiculo=='Completo'){
            precioCoberturaVehiculo=precioCoberturaCompleta;
        }else if(this.coberturaVehiculo=='Simple'){
            precioCoberturaVehiculo=precioCoberturaSimple;
        }else if(this.coberturaVehiculo=='Simple con granizo'){
            precioCoberturaVehiculo=precioCoberturaSimpleGranizo;
        }else if(this.coberturaVehiculo=='Simple con ruedas'){
            precioCoberturaVehiculo=precioCoberturaSimpleRuedas;
        }

        return (precioTipoVehiculo+precioMarcaVehiculo+precioCoberturaVehiculo) ;
    }
}

const formularioPoliza = document.getElementById('poliza');

formularioPoliza.addEventListener('submit', function(e){
    e.preventDefault();
    const vehiculo = document.getElementById('tipoVehiculo');
    const tipoVehiculoSelect = vehiculo.options[vehiculo.selectedIndex].value;

    const año = document.getElementById('añoVehiculo');
    const añoSelect = año.options[año.selectedIndex].value;
    
    const marca = document.getElementById('marcaVehiculo');
    const marcaSelect = marca.options[marca.selectedIndex].value;
    
    const cobertura = document.getElementById('coberturaVehiculo');
    const coberturaSelect = cobertura.options[cobertura.selectedIndex].value;

    const poliza = new PolizaSeguro(tipoVehiculoSelect,añoSelect,marcaSelect,coberturaSelect)

    alert(poliza.cotizarSeguro());
    console.log(poliza.tipoDeVehiculo);
    console.log(poliza.cotizarSeguro());
    /* alert('Se ha enviado con éxito su poliza'); */
});