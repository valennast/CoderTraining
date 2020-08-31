
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

/* VARIABLES Y ARRAYS */

 var marcaFord = new MarcasVehiculos('Ford',250);
 var marcaPeugeot = new MarcasVehiculos('Peugeot',300);
 var marcaVolkswagen = new MarcasVehiculos('Volkswagen',350);
 var marcaToyota = new MarcasVehiculos('Toyota',400);

 var listadoMarcasRegistradas=[marcaFord,marcaPeugeot,marcaVolkswagen,marcaToyota];

 var camioneta = new TipoVehiculos ('Camioneta',1500);
 var auto = new TipoVehiculos ('Auto',1000);   

 var listadoVehiculosRegistrados=[camioneta,auto];

 var coberturaSimple= new TiposCobertura('Simple',300);
 var coberturaCompleta= new TiposCobertura('Completa',750);
 var coberturaSimpleGranizo= new TiposCobertura('Simple con granizo',350);
 var coberturaSimpleRuedas= new TiposCobertura('Simple con ruedas',400);

 var listadoCoberturasResgistradas=[coberturaCompleta,coberturaSimple,coberturaSimpleGranizo,coberturaSimpleRuedas];

 var año2020 = new AñosModelo('2020',100);
 var año2019 = new AñosModelo('2019',200);
 var año2018 = new AñosModelo('2018',300);
 var año2017 = new AñosModelo('2017',400);
 var año2016 = new AñosModelo('2016',500);

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

function buscadorObjetos(listadoArray,objetoABuscar){
    var objetoEncontrado;
    listadoArray.forEach((element) => {
            if (element.nombre==objetoABuscar){
                objetoEncontrado=element;
            }
     });
     return objetoEncontrado;
}

class PolizaSeguro {
    constructor(tipoVehiculo,marcaVehiculo,añoVehiculo,coberturaVehiculo){
        this.tipoVehiculo=tipoVehiculo;
        this.marcaVehiculo=marcaVehiculo;
        this.añoVehiculo=añoVehiculo;
        this.coberturaVehiculo=coberturaVehiculo;
    }
    cotizarSeguro(){
        
        return this.tipoVehiculo.valor+this.marcaVehiculo.valor+this.añoVehiculo.valor+this.coberturaVehiculo.valor;
    }
};


var poliza = new PolizaSeguro();

const formularioPoliza = document.getElementById('poliza');

formularioPoliza.addEventListener('submit', function(e){
    e.preventDefault();
    
    const vehiculo = document.getElementById('tipoVehiculo');
     
        poliza.tipoVehiculo=buscadorObjetos(listadoVehiculosRegistrados,vehiculo.options[vehiculo.selectedIndex].value);
        
    const año = document.getElementById('añoVehiculo');
    
        poliza.añoVehiculo=buscadorObjetos(listaAñosVehiculos,año.options[año.selectedIndex].value);

    const marca = document.getElementById('marcaVehiculo');
    
        poliza.marcaVehiculo=buscadorObjetos(listadoMarcasRegistradas,marca.options[marca.selectedIndex].value);
            
    const cobertura = document.getElementById('coberturaVehiculo');
        
        poliza.coberturaVehiculo=buscadorObjetos(listadoCoberturasResgistradas,cobertura.options[cobertura.selectedIndex].value);


              
    alert(poliza.cotizarSeguro());
});

