async function conversacion(name) {
  //saludar
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  console.log("Hola " +name);

  //conversar
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  console.log("bla bla bla");

  //conversar otra vez
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  console.log("bla bla bla");

  //despedirse
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  console.log("Hasta pronto " +name);
}

conversacion("Manuel Alejandro");
