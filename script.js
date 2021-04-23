let numero = document.getElementById("numerotarjeta");
let boton = document.getElementById("boton");
let caja1 = document.getElementById("infopagina")
let aviso = document.createElement('button');
let label = document.getElementById('label');
var verificacion = 0;
var inverso;
var digito;
numero.addEventListener('keyup', (e) => {
  let valorinput = e.target.value;

  //EXPRECIONES REGULARES
  //Eliminar espacios en blanco y poner vacio
  numero.value = valorinput.replace(/\s/g, '')
    //emininar letras
    .replace(/\D/g, '')
    //poner espacio cada 4 digitos
    .replace(/([0-9]{4})/g, '$1 ')

  cadena = numero.value;

  console.log(numero.value.length);

  var elemento = new Array();
  //CREANDO UN ARREGLO PARA GUARDAR LOS DATOS INGRESADOS POR EL USUARIO
  digito = new Array();
  // digito = new Array(numero.value[0], numero.value[1], numero.value[2], numero.value[3], numero.value[5], numero.value[6],
  //   numero.value[7], numero.value[8], numero.value[10], numero.value[11],
  //   numero.value[12], numero.value[13],
  //   numero.value[15], numero.value[16], numero.value[17], numero.value[18]);

  for (let i = 0; i < numero.value.length; i++) {
    digito[i] = numero.value[i];

  }
  //ELIMINAR ESPACIO EN BLANCO DE ARRAY DE NUMEROS
  for (let i = 0; i <= digito.length; i++) {
    if (digito[i] == " ") {
      digito.splice(i, 1);
    }
  }
  //SE LE DA VUELTA AL ARREGLO COMPLETO 
  inverso = digito.reverse();

  //AL ARRAY ELEMENTO SE LE ASIGNA EL ORDEN INVERSO DE TARGETA.
  elemento = inverso;
  //A LOS NUMEROS PARES QUE COMIENZAN DESDE ABAJO HACIA ARRIBA SE MULTIPLICAN POR DOS
  //Y LOS IMPARES POR UNO

  for (let i = 0; i < digito.length; i++) {

    if (i % 2) {
      elemento[i] = inverso[i] * 2;
    } else {

    } elemento[i] = inverso[i] * 1;

  }

  {

  }

  //SE VERIFICA LA LONGITUD DE LA TARJETA.
  if (cadena.length < 18) {
    label.classList.add("longitudincorrecta");
    numero.classList.add("errorlongitud");
    numero.classList.remove("longitudB")


  }
  else if (cadena.length > 20) {
    label.classList.add("longitudincorrecta");
    numero.classList.add("errorlongitud");
    numero.classList.remove("longitudB")
  }
  else {
    numero.classList.add("longitudB");
    label.classList.remove("longitudincorrecta");
    numero.classList.remove("errorlongitud")

  }
  //EN ESTA SECCION LO QUE SE HACE ES PONER CONDICIONALES MULTIPLES EN CASO DE QUE LOS
  //NUMEROS PARES MULTIPLICADOS POR 2 SEAN MAYORES O IGUALES A 10 Y SE LES REASIGNA UN VALOR.
  //SUMANDO LOS DIGITOS DE EL RESULTADO DE LA MULTIPLICACION
  for (let i = 0; i <= elemento.length; i++) {

    if (i % 2) {

      if (elemento[i] >= 10) {
        switch (elemento[i]) {
          case 10: elemento[i] = 1;
            break;
          case 12: elemento[i] = 3;
            break;
          case 14: elemento[i] = 5;
            break;
          case 16: elemento[i] = 7;
            break;
          case 18: elemento[i] = 9;
            break;
        }
      }


    }

  }
})

//FUNCION PARA SUMAR TODOS LOS NUMEROS DEL ARREGLO YA  CONVERTIDOS 
function sumar() {
  for (var i = 0; i < digito.length; i++) {
    verificacion += digito[i];

  }
  console.log(verificacion);

  if (verificacion % 10 === 0) {
    caja1.innerHTML = "Targeta valida, Tarjeta verificada correctamente";
    caja1.classList.add("verificar");
    avisoBoton()
    aviso.classList.add("aviso");
    caja1.appendChild(aviso);
  }
}

boton.addEventListener("click", () => {
  accion1();
  sumar();

})

function accion1() {
  if (!numero.value.trim()) {
    aviso.id = "boton2";
    caja1.innerText = "Trajeta de credito no reconocida,Ingrese una tarjeta de credito";
    caja1.classList.add("verificar-vacio")
    avisoBoton()

    aviso.classList.add("aviso");
    caja1.appendChild(aviso);
  }
  else if (cadena.length < 20) {
    caja1.innerText = "Tarjeta invalida,Numero de tarjeta demasiado corta";
    avisoBoton()
    aviso.classList.add("aviso");
    caja1.appendChild(aviso);
    caja1.classList.add("verificar-false");
  }
  else if (cadena.length > 20) {
    caja1.innerText = "Numero de tarjeta excede la cantidad de digitos permitida";
    avisoBoton()
    aviso.classList.add("aviso");
    caja1.appendChild(aviso);
    caja1.classList.add("verificar-false");
  }
  else {
    caja1.innerText = "La tarjeta #### #### ####  " + cadena[15] + cadena[16] + cadena[17] + cadena[18] + " no es valida";
    avisoBoton()
    aviso.classList.add("aviso");
    caja1.appendChild(aviso);


  }

}

aviso.addEventListener("click", () => {
  accion2();
})

function accion2() {
  location.reload();
}







function avisoBoton() {
  aviso.innerText = "Regresar";
}