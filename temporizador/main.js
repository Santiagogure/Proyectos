
let horas = 2
let minutos = 59
let segundos = 5
let numerico = 1
cargarSegundos() //Aca llamamos a la funcion para que los numeros aparezcan de forma inmediata
temporizador()



//Ejecutar segundos 
function cargarSegundos() {
    let txtSegundos;

    if (segundos < 0) {
        segundos = 59;
    }
    if (segundos < 10) {
        txtSegundos =  `0${segundos}`
    } else {
         txtSegundos = segundos
    }
    document.getElementById('segundos').innerHTML = txtSegundos
        segundos--;        


    cargarMinutos(segundos)
}

setInterval(cargarSegundos, 1000)

//Ejecutar minutos

function cargarMinutos(segundos) {
  let txtMinutos;
   
  if (segundos == -1 && minutos !== 0) {
      setTimeout(() => {
       minutos--;
   }, 500);
  } else if (segundos == -1 && minutos == 0) {
      setTimeout(() => {
       minutos = 59
   }, 500);
  } 
  if (minutos < 10) {
  txtMinutos =  `0${minutos}`
  } else {
   txtMinutos = minutos
  }
  document.getElementById('minutos').innerHTML = txtMinutos

  cargarHoras(segundos, minutos)
}

function cargarHoras(segundos, minutos) {
     let txtHoras;

     if (segundos == -1 && minutos == 0 && horas !== 0) {
         setTimeout(() => {
             horas--;
        }, 500);
     } else if (segundos == -1 && minutos == 0 && horas == 0) {
         setTimeout(() => {
            horas = 2;
        }, 500);
     }

     if (horas < 10) {
        txtHoras = `0${horas}`
     } else {
        txtHoras = horas
     }
   document.getElementById('horas').innerHTML = txtHoras
}




// Boton


function temporizador() {
    let txtNumerico;
     txtNumerico = numerico
    document.getElementById('numerico').innerHTML = txtNumerico  
        numerico++;         

}

var detente;
detente = setInterval(temporizador, 1000)    



const boton = document.querySelector('.boton')

boton.addEventListener('click', () => {
    clearInterval(detente)
  
})

 
const boton2 = document.querySelector('.boton-2')

boton2.addEventListener('click', () =>{
    detente = setInterval(temporizador, 1000)
})





