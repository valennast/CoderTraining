
/* Variables a Utilizar */

/* Variables para crear el objeto */
var precioTipoVehiculo;
var precioañoModelo;
var precioMarcaVehiculo;
var precioCoberturaVehiculo;

/* Objeto*/
class Seguro {
    constructor(tipoDeVehiculo, añoModelo, marca, cobertura) {
        this.precioTipoVehiculo = tipoDeVehiculo;
        this.precioañoModelo = añoModelo;
        this.precioMarcaVehiculo = marca;
        this.precioCoberturaVehiculo = cobertura;
    }
}
/* Pruebas */
crearPoliza();


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

