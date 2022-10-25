let mensajes = ["Hola Manuel Alejandro", "bla bla bla", "bla bla bla", "Hasta Pronto Manuel Alejandro"];

let i = 0;
let j = 0;

function esperar(n){
  if (n == 0){
    return false;
  }
  else {
    new Promise(resolve => {
      setTimeout(() => {
        console.log(mensajes[i]);
        i++;
      }, 2000+j);
    });
  }
  j=j+2000;
  return esperar(n-1);
}

esperar(mensajes.length);
