//Creación de promesas
//ejemplo de promesa resuelta
let promise1 = new Promise((resolve, reject) => {
    // resolve y reject
    setTimeout(function () {
        resolve("La promesa fue resuelta");
    }, 250);
    setTimeout(function () {
        reject("La promesa se rechazo");
    }, 350);
});

//console.info(promise1);
promise1.then((successMessage) => {
    console.info("Respuesta de promesa1: " + successMessage);
}).catch((errorMessage) => {
    console.info("Error de promesa1: " + errorMessage);
});

//Ejemplo sincrono para compara
let successMessage;
setTimeout(function () {
    successMessage = "Promesa resuelta!";
}, 250);
console.log('Respuesta síncrona: ' + successMessage);

// ejemplo promesa rechazada
//let promise2 = new Promise((resolve, reject) => {
    // resolve y reject
//    setTimeout(function () {
//        resolve("La promesa fue resuelta");
//   }, 350);
//    setTimeout(function () {
//        reject("La promesa se rechazo");
//    }, 250);
  //  try {
        // código correcto
  //      resolve("ok");
 //   } catch (error) {
 //       reject(error);
//    }
//});

//console.info(promise2);
/* promise2.then((successMessage) => {
    console.info("Respuesta de promesa1: " + successMessage);
}).catch((errorMessage) => {
    console.info("Error de promesa1: " + errorMessage);
}); */

//ejemplo de promesa pendiente que termina resolviéndose
let promesa3 = new Promise((resolve, reject) => {
    console.log("pending...");
    setTimeout(function () {
        if (true) {
            resolve("Promesa resuelta!");
        } else {
            reject("Promesa rechazada!");
        }
    }, 3500);
});

promesa3.then((successMessage) => {
    console.log('Respuesta de promesa3: ' + successMessage);
}).catch((errorMessage) => {
    console.log("¡Error de promesa3! " + errorMessage);
});

// ejemplo de fetch con promesa
let imgCtn = document.getElementById('imgCtn');
console.info(imgCtn);

function getDogImg(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            let dogImg = document.createElement('img');
            dogImg.setAttribute('src', json.message);
            dogImg.style.width = '300px';
            imgCtn.appendChild(dogImg);
        }).catch(err => {

            console.error('fetch failed', err);
        });
}

getDogImg("https://dog.ceo/api/breeds/image/random");



