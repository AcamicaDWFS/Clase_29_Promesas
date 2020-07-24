function getRandInt() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      rand = Math.floor(Math.random() * 11);

      if (rand % 2 == 0) {
        resolve(rand);
      } else {
        reject(rand);
      }
    }, 2000);
  });
}

// Crea una promesa que elija un número al azar entre 0 y 10.
getRandInt()
  .then(() => {
    console.log("Promesa exitosa.");
    console.log("Número generado:", rand);
  })
  .catch(() => {
    console.error("Promesa fallida.");
    console.log("Número generado:", rand);
  });
