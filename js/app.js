
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

/* Base de dato Formato JSON */

var marcas = [{"nombre": "Ford","precio": 250},
{"nombre": "Peugeot","precio": 300},
{"nombre": "Volkswagen","precio": 350},
{"nombre": "Toyota","precio": 400}];

var tipos=[{"nombre": "Camioneta","precio": 1500},{"nombre": "Auto","precio": 1000}];

var coberturas =[{"nombre": "Simple","precio": 300},
{"nombre": "Completa","precio": 750},
{"nombre": "Simple con granizo","precio": 350},
{"nombre": "Simple con ruedas","precio": 400}];


var years =[{"nombre": "2020","precio": 100},
{"nombre": "2019","precio": 200},
{"nombre": "2018","precio": 300},
{"nombre": "2017","precio": 400},
{"nombre": "2016","precio": 500}];


 /* INTERACCIÓN HTML  */
window.onload= () => {
    const selectMarca = document.querySelector('#marcaVehiculo');
    const selectCobertura = document.querySelector('#coberturaVehiculo');
    const selectTipo = document.querySelector('#tipoVehiculo');
    const selectYear = document.querySelector('#añoVehiculo');

   const listadoMarcasRegistradas=listaSelect(marcas,"nombre");
   const listadoCoberturasResgistradas=listaSelect(coberturas,"nombre");
   const listadoVehiculosRegistrados=listaSelect(tipos,"nombre");
   const listaAñosVehiculos=listaSelect(years,"nombre");
    
    llenarSelect(listadoMarcasRegistradas,selectMarca);
    llenarSelect(listadoCoberturasResgistradas,selectCobertura);
    llenarSelect(listadoVehiculosRegistrados,selectTipo);
    llenarSelect(listaAñosVehiculos,selectYear);
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
  
    //Mantener el mensaje por 3 segundos y después borrarlo
    setTimeout(() => {
      div.remove();
    }, 3000);
  }

  function listaSelect(array, key) {
    const listado = [];
  
    array.forEach(elem => {
      if (!listado.includes(elem[key])) {
        listado.push(elem[key]);
      }
    })
    return listado.sort();
  }

function llenarSelect(listadoArray,idListado){
    
    listadoArray.forEach((element) => {
    var opcion = document.createElement("option");
    opcion.value = element;
    opcion.text = element;
    idListado.appendChild(opcion);
     });
}

function buscadorObjetos(baseDatos,nombreObjeto){
    var objetoEncontrado;
     for (let index = 0; index < baseDatos.length; index++) {
        if (nombreObjeto==baseDatos[index].nombre){
            objetoEncontrado=baseDatos[index];
        }
         
     }

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
        
        return this.tipoVehiculo.precio+this.marcaVehiculo.precio+this.añoVehiculo.precio+this.coberturaVehiculo.precio;
    }
};



const poliza = new PolizaSeguro();
const formularioPoliza = document.getElementById('poliza');

formularioPoliza.addEventListener('submit', function(e){
    e.preventDefault();
    
    const yearSelect =  document.querySelector('#añoVehiculo').value;
    const vehiculoSelect =document.querySelector('#tipoVehiculo').value;
    const marcaSelect =document.querySelector('#marcaVehiculo').value;
    const coberturaSelect =document.querySelector('#coberturaVehiculo').value;
    if (yearSelect === '' || vehiculoSelect === '' || marcaSelect === '' || coberturaSelect === '') {
        mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
      }
    
      mostrarMensaje('Cotizando...', 'exito');
      
        poliza.tipoVehiculo=buscadorObjetos(tipos,vehiculoSelect);
        poliza.añoVehiculo=buscadorObjetos(years,yearSelect);
        poliza.marcaVehiculo=buscadorObjetos(marcas,marcaSelect);
        poliza.coberturaVehiculo=buscadorObjetos(coberturas,coberturaSelect);

        const respuestaAnterrior = document.getElementById('resultadoDiv');
          if(respuestaAnterrior != null) {
            respuestaAnterrior.remove(); 
          }

        mostrarResultado(poliza);

        localStorage.setItem('Valor Poliza', poliza.cotizarSeguro());
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