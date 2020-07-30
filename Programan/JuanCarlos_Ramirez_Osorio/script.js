/*Crea una promesa que elija un número al azar
entre 0 y 10.
- Si el número es par, considera la promesa exitosa.
- Si el número es impar, rechaza la promesa.
Muestra por consola si la promesa finalizó con éxito o
no y el número al azar que salió
- SetTimeout 2 seg
*/

const randomNum = new Promise((resolve, reject) => {
    setTimeout(() => {
        rand = Math.floor(Math.random() * 10);
        if (rand % 2 == 0) {
            resolve(rand);
        } else (reject(rand));
    }, 2000);
});

randomNum
    .then((result) => {
        console.log(`Promesa cumplida, el número par es: ${result}`);
    })
    .catch((result) => {
        console.log(`Promesa rechazada, el numero impar es: ${result}`);
    })