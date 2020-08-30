
/* OBJETOS A UTILIZAR */

class MarcasVehiculos{
    constructor(nombreMarca,valorMarca) {
        this.nombre=nombreMarca;
        this.valor=valorMarca;
    }
    
}
class TipoVehiculos{
    constructor(vehiculo,valorVehiculo){
        this.nombre=vehiculo;
        this.valor=valorVehiculo;
    }
    
}
class TiposCobertura{
    constructor(cobertura,valorCobertura){
        this.nombre=cobertura;
        this.valor=valorCobertura;
    }
    
}
class AñosModelo{
    constructor(añoVehiculo,valorAño){
        this.nombre=añoVehiculo;
        this.valor=valorAño;
    }
        
}

class PolizaSeguro {
    constructor() {
        this.coberturaVehiculo= new TiposCobertura;
        this.marcaVehiculo= new MarcasVehiculos;
        this.añoVehiculo= new AñosModelo;
        this.tipoVehiculo= new TipoVehiculos;
    }
    cotizarSeguro(){
        let totalPoliza;
        totalPoliza=this.coberturaVehiculo.valor+this.marcaVehiculo.valor+this.añoVehiculo.valor+this.tipoVehiculo.valor;
        return totalPoliza ;
    }
}
/* VARIABLES Y ARRAYS */

 var marcaFord = new MarcasVehiculos('Ford','250');
 var marcaPeugeot = new MarcasVehiculos('Peugeot','300');
 var marcaVolkswagen = new MarcasVehiculos('Volkswagen','350');
 var marcaToyota = new MarcasVehiculos('Toyota','400');

 var listadoMarcasRegistradas=[marcaFord,marcaPeugeot,marcaVolkswagen,marcaToyota];

 var camioneta = new TipoVehiculos ('Camioneta','1500');
 var auto = new TipoVehiculos ('Auto','1000');   

 var listadoVehiculosRegistrados=[camioneta,auto];

 var coberturaSimple= new TiposCobertura('Simple','300');
 var coberturaCompleta= new TiposCobertura('Completa','750');
 var coberturaSimpleGranizo= new TiposCobertura('Simple con granizo','350');
 var coberturaSimpleRuedas= new TiposCobertura('Simple con ruedas','400');

 var listadoCoberturasResgistradas=[coberturaCompleta,coberturaSimple,coberturaSimpleGranizo,coberturaSimpleRuedas];

 var año2020 = new AñosModelo('2020','100');
 var año2019 = new AñosModelo('2019','200');
 var año2018 = new AñosModelo('2018','300');
 var año2017 = new AñosModelo('2017','400');
 var año2016 = new AñosModelo('2016','500');

 var listaAñosVehiculos= [año2020,año2019,año2018,año2017,año2016];

 /* INTERACCIÓN HTML  */

llenarSelect(listadoMarcasRegistradas,"marcaVehiculo");
llenarSelect(listadoCoberturasResgistradas,"coberturaVehiculo");
llenarSelect(listadoVehiculosRegistrados,"tipoVehiculo");
llenarSelect(listaAñosVehiculos,"añoVehiculo");

function llenarSelect(listadoArray,idListado){
    const listaHtml = document.getElementById(idListado);
    listadoArray.forEach((element) => {
    const listaHtml = document.getElementById(idListado);
    var opcion = document.createElement("option");
    opcion.value = element.nombre;
    opcion.text = element.nombre;
    listaHtml.appendChild(opcion);
     });
}


const formularioPoliza = document.getElementById('poliza');

formularioPoliza.addEventListener('submit', function(e){
    e.preventDefault();
    var poliza = new PolizaSeguro()
    const vehiculo = document.getElementById('tipoVehiculo');
    listadoVehiculosRegistrados.forEach(element => {
        if (element.nombre==vehiculo.options[vehiculo.selectedIndex].value){
            poliza.tipoVehiculo=listadoVehiculosRegistrados.element;
        }
    });

    const año = document.getElementById('añoVehiculo');
    listadoVehiculosRegistrados.forEach(element => {
        if (element.nombre==año.options[año.selectedIndex].value){
            poliza.añoVehiculo=listadoVehiculosRegistrados.element;
        }
    });
    
    
    const marca = document.getElementById('marcaVehiculo');
    listadoVehiculosRegistrados.forEach(element => {
        if (element.nombre==marca.options[marca.selectedIndex].value){
            poliza.marcaVehiculo=listadoVehiculosRegistrados.element;
        }
    });
    
    
    const cobertura = document.getElementById('coberturaVehiculo');
    listadoVehiculosRegistrados.forEach(element => {
        if (element.nombre==cobertura.options[cobertura.selectedIndex].value){
            poliza.coberturaVehiculo=listadoVehiculosRegistrados.element;
        }
    });
    
    alert(poliza.marcaVehiculo.nombre);
});

