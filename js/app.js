
/* var tiposAuto=['Camioneta','Auto'];
var años = [2015,2016,2017,2018,2019,2020];
var marca = ['Ford','Toyota','Peugeot','Volkswagen'];
var cobertura = ['Completo','Simple','Simple con granizo','Simple con ruedas']; */

class Seguro {
    constructor(tipoDeVehiculo, añoModelo, marca, cobertura) {
        this.tipoDeVehiculo = tipoDeVehiculo;
        this.añoModelo = añoModelo;
        this.marca = marca;
        this.cobertura = cobertura;
    }
}

var tipoDeVehiculo1;
var añoModelo1;
var marca1;
var cobertura;

crearPoliza();

function completarFormulario(){
    var tipoDeVehiculo1 = prompt('Ingrese el tipo del vehiculo que va cotizar');
    var añoModelo1 = prompt('Ingrese el año del vehiculo que va cotizar');
    var marca1 = prompt('Ingrese la marca del vehiculo que va cotizar');
    var cobertura = prompt('Ingrese la cobertura del vehiculo que va cotizar');
}
function crearPoliza(){
    completarFormulario();
    Poliza1 = new Seguro(tipoDeVehiculo1,añoModelo1,marca1,cobertura);
}

