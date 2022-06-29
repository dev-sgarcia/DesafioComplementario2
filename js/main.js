 class Paquete {
    constructor(nombre, precio, id) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
    }
  }
  
  let lista_compra = [];
  
  const paquetes = [];
  paquetes.push(new Paquete("- Transporte redondo y entrada a Six Flags ($450)", 450, 1));
  paquetes.push(new Paquete("- Transporte redondo. ($200)", 200, 2));
  paquetes.push(new Paquete("- Entrada a Six Flags. ($300)", 300, 3));
    paquetes.push(new Paquete("- Transporte sencillo (ida o vuelta).  ($120)", 120, 4));
  
  const mostrarLista = () => {
    let texto = "";
    paquetes.forEach((item) => {
      texto += `${item.id}) ${item.nombre}\n`;
    });

    let seleccion = parseInt(prompt(`Selecciona el paquete deseado.\n${texto}`));   
    return seleccion;
  };


  const paqueteElegido = (id) => {
    console.log(id);
    let paqueteFind = paquetes.find((item) => item.id === id);
    lista_compra.push(paqueteFind);
    let continuar = confirm("¿Desea agregar otro paquete? (Cancelar = No)");
    if (continuar === true) {
      iniciaVenta();
    }
  };
  
  const iniciaVenta = () => {
    paqueteId = mostrarLista();
    paqueteElegido(paqueteId);
  };
  
  iniciaVenta();
  
  let total = lista_compra.reduce((acc, item) => acc + item.precio, 0);
  let numeroPaquetes = lista_compra.length;
  alert("Resúmen de compra:\n\n" + "Total de paquetes: "+ numeroPaquetes + "\n Total a pagar: "+ total);
  alert("Gracias por su compra, ¡Buen Viaje");

/*
//  funcion para determinar el armado del producto.
function Paquete(nombre, precio) {
    this.name = nombre;
    this.price = precio;
    this.quantity = 0;
}

//  Se crean los paquetes vacacionales que serán las opciones del cliente.
const paquete1 = new Paquete("PaqueteTransporteAccesos", 450);
const paquete2 = new Paquete("Transporte", 200);
const paquete3 = new Paquete("Accesos", 300);

//  Alta de las variables a utilizar
let subTotal = 0;
let totalpaquetes = 0;
let totaltransporte = 0;
let totalaccesos = 0;

//  Muestro en pantalla los paquetes vacacionales disponibles.
function iniciaVenta() {
    let opcion = parseInt(prompt("Bienvenido, por favor indique el número de su paquete. \n\n\n 1 -Transporte redondo y entrada a Six Flags ($450) \n 2 -Transporte redondo. ($200) \n 3 -Entrada a Six Flags. ($300) \n\n 9- Comprar \n 0- Cancelar"));
    quantity(opcion);
}

//  Funcion que solicita la cantidad del producto que se va a comprar para realizar el cálculo del monto a cobrar y la cantidad de paquetes por opción.
function quantity(opcion) {
    //  si le doy "Comprar" entonces regreso el total.
    if (opcion === 9) 
        return total(subTotal);
    //  si le doy "Cancelar" entonces salgo del proceso.
    if (opcion === 0)
        return alert("Gracias por su visitarnos.");

    //  Si no presione ni Comprar ni Cancelar entonces pregunto la cantidad de pasajeros.        
    let pasajeros = parseInt(prompt("¿Cantidad de paquetes o pasajeros?"));
    //  de acuerdo a la "opcion" seleccionada hago la operación para obtener el monto a pagar y al mismo tiempo guardo la cantidad de pasajeros/paquetes.
    switch (opcion) {
        //  Paquete de 450
        case 1:
            subTotal += paquete1.price * pasajeros;
            totalpaquetes += pasajeros;
            break;
        //  Paquete de 200
        case 2:
            subTotal += paquete2.price * pasajeros;
            totaltransporte += pasajeros;
            break;
        //  Paquete de 300
        case 3:
            subTotal += paquete3.price * pasajeros;
            totalaccesos += pasajeros;
            break;
    }
    //  muestro de nuevo las opciones
    iniciaVenta();
}


function total(subTotal) {
    //  Si presiono la opción "Comprar" pero no seleccionó alguna opción entonces le muestro el mensaje
    if (subTotal === 0) {
        alert("No ha indicado una opción de compra. \n Por favor seleccione un paquete del listado.");
        return iniciaVenta();
    }
    //  En caso de que la compra exista entonces muestro los montos y el saludo final.
    alert("El resúmen de su compra es la siguiente: \n\n" + totalpaquetes + " Transporte redondo y entrada a Six Flags.\n" + totaltransporte + " Transporte redondo.\n" + totalaccesos + " Entrada a Six flags.\n\n" + "El total a pagar es de: $" + subTotal + "\n\n Presione ENTER para procesar el pago.");
    alert("Gracias por su compra, ¡Buen Viaje");
}

//  Inicia la aplicación
iniciaVenta();
*/