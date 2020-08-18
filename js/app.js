
/* Variables a Utilizar */

/* Variables para crear el objeto */
var precioTipoVehiculo;
var precioañoModelo;
var precioMarcaVehiculo;
var precioCoberturaVehiculo;

/* Arrays a utilizar para interacturar con el html */
var listadoTiposVehiculos=['Camioneta','Auto'];
var listadoAñosMoldelo=[2015,2016,2017,2018,2019,2020];
var listadoMarcaVehiculos=['Ford','Toyota','Peugeot','Volkswagen'];
var listadoCoberturaVehiculos=['Completo','Simple','Simple con granizo','Simple con ruedas'];


/* Este podria ser uno de las Funciones que se podria usar, cuando veamos como interactuar con el html lo cambiare */
function menvaajePersonalizadoError(arrayDeControl){
 console.log('Debes elegir entre una de las ' + arrayDeControl.length + 'Opciones');
}


/*  Objeto   */
class Seguro {
    constructor(tipoDeVehiculo, añoModelo, marca, cobertura) {
        this.precioTipoVehiculo = tipoDeVehiculo;
        this.precioañoModelo = añoModelo;
        this.precioMarcaVehiculo = marca;
        this.precioCoberturaVehiculo = cobertura;
    }
}
/* Prueba */
crearPoliza();

/* Esto debe cambiar seguramente cuando veamos como interactuar con el html */
function completarFormulario(){
    precioTipoVehiculo = prompt('Ingrese el tipo del vehiculo que va cotizar');
    precioañoModelo = prompt('Ingrese el año del vehiculo que va cotizar');
    precioMarcaVehiculo = prompt('Ingrese la marca del vehiculo que va cotizar');
    precioCoberturaVehiculo = prompt('Ingrese la cobertura del vehiculo que va cotizar');
}

/* Es una funcion pero debería ser un metodo del objeto para calcular */
function crearPoliza(){
    completarFormulario();
    Poliza1 = new Seguro(precioTipoVehiculo,precioMarcaVehiculo,precioMarcaVehiculo,precioCoberturaVehiculo);
    console.log(Poliza1);
}

