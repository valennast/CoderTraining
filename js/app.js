
/* Variables a Utilizar */

/* Variables para crear el objeto */
var precioTipoVehiculo;
var precioañoModelo;
var precioMarcaVehiculo;
var precioCoberturaVehiculo;

/* Arrays a utilizar para interacturar con el html */
var listadoTiposVehiculos=['Elegir Tipo de Vehiculo','Camioneta','Auto'];
var listadoAñosMoldelo=['Elegir Año',2015,2016,2017,2018,2019,2020];
var listadoMarcaVehiculos=['Elegir Marca','Ford','Toyota','Peugeot','Volkswagen'];
var listadoCoberturaVehiculos=['Elegir Cobertura','Completo','Simple','Simple con granizo','Simple con ruedas'];

/*  Objeto   */
class PolizaSeguro {
    constructor(tipoDeVehiculo, añoModelo, marca, cobertura) {
        this.precioTipoVehiculo = tipoDeVehiculo;
        this.precioañoModelo = añoModelo;
        this.precioMarcaVehiculo = marca;
        this.precioCoberturaVehiculo = cobertura;
    }
}

/* COMPLETO LOS SELECT DEL HTML */

llenarSelects(listadoMarcaVehiculos,"marcaVehiculo");
llenarSelects(listadoCoberturaVehiculos,"coberturaVehiculo");
llenarSelects(listadoAñosMoldelo,"añoVehiculo");
llenarSelects(listadoTiposVehiculos,"tipoVehiculo");

function llenarSelects(listadoArray,idListado){
    var listaHtml = document.getElementById(idListado);
    for (var i = 0; i < listadoArray.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = listadoArray[i];
        opcion.text = listadoArray[i];
        listaHtml.appendChild(opcion);
        }  
}
