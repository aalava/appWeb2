function esperar() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
}

esperar().then(()=>{
  console.log("Hola Manuel Alejandro");
  return esperar();
})
.then(()=>{
  console.log("bla bla bla");
  return esperar();
})
.then(()=>{
  console.log("bla bla bla");
  return esperar();
})
.then(()=>{
  console.log("Hasta pronto Manuel Alejandro");
})
