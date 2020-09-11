
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
window.onload= () => {

    
    llenarSelect(listadoMarcasRegistradas,"marcaVehiculo");
    llenarSelect(listadoCoberturasResgistradas,"coberturaVehiculo");
    llenarSelect(listadoVehiculosRegistrados,"tipoVehiculo");
    llenarSelect(listaAñosVehiculos,"añoVehiculo");
}

function mostrarMensaje(mensaje, tipo) {
    //Creo un div para mostrar el mensaje
    const div = document.createElement('div');
  
    if (tipo === 'error') {
      div.classList.add('error');
    } else {
      div.classList.add('correcto');
    }
  
    //Agrego clases y contenido al div
    div.textContent = mensaje;
  
    // Insertar en el HTML
    const formulario = document.getElementById('poliza');
    formulario.insertBefore(div, document.getElementById('resultado'));
  
    //Mantener el mensaje por 2 segundos y después borrarlo
    setTimeout(() => {
      div.remove();
    }, 3000);
  }

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
    
    const año = document.getElementById('añoVehiculo');
    const vehiculo = document.getElementById('tipoVehiculo');
    const marca = document.getElementById('marcaVehiculo');
    const cobertura = document.getElementById('coberturaVehiculo');
    if (vehiculo.options[vehiculo.selectedIndex].value === '' || año.options[año.selectedIndex].value === '' || marca.options[marca.selectedIndex].value === '' || cobertura.options[cobertura.selectedIndex].value === '') {
        mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
      }
    
      mostrarMensaje('Cotizando...', 'exito');
     
        poliza.tipoVehiculo=buscadorObjetos(listadoVehiculosRegistrados,vehiculo.options[vehiculo.selectedIndex].value);
        poliza.añoVehiculo=buscadorObjetos(listaAñosVehiculos,año.options[año.selectedIndex].value);
        poliza.marcaVehiculo=buscadorObjetos(listadoMarcasRegistradas,marca.options[marca.selectedIndex].value);
        poliza.coberturaVehiculo=buscadorObjetos(listadoCoberturasResgistradas,cobertura.options[cobertura.selectedIndex].value);

        


        const respuestaAnterrior = document.getElementById('resultadoDiv');
          if(respuestaAnterrior != null) {
            respuestaAnterrior.remove();
          }
        mostrarResultado(poliza);
});

function mostrarResultado(poliza){
    const resultadohtml=document.getElementById('resultado');
   /*  var p= document.createElement("p");
    p.id="resultadoPoliza";
    p.innerHTML= "El valor de tu Seguro es: "; */
    var div = document.createElement("div");
    div.id="resultadoDiv";
    div.classList.add('mt-10');
    div.innerHTML=` 
    <p class="header">Resumen Cotización </p>
    <p class="font-bold">Tipo de Vehiculo: ${tipoVehiculo.value} </p>
    <p class="font-bold">Marca: ${marcaVehiculo.value} </p>
    <p class="font-bold">Año: ${añoVehiculo.value} </p>
    <p class="font-bold">Tipo de Cobertura: ${coberturaVehiculo.value}  </p>
    <p class="font-bold">Valor Poliza: ${poliza.cotizarSeguro()}</p> 
    `;
    const spinner= document.getElementById('spinner')
    spinner.style.display='block';
    setTimeout(function() {
        spinner.style.display = 'none';
        /* resultadohtml.appendChild(p); */
        resultadohtml.appendChild(div);
    }, 3000);
    
   
}