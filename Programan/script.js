/*Crea una promesa que elija un número al azar
entre 0 y 10.
- Si el número es par, considera la promesa exitosa.
- Si el número es impar, rechaza la promesa.
Muestra por consola si la promesa finalizó con éxito o
no y el número al azar que salió
- SetTimeout 2 seg
*/

let number = Math.floor(Math.random() * 10) + 1;

let promisenumber = new Promise ((resolve, reject) => {
    setTimeout(function () {
        if(number % 2 == 0){
            resolve("Par, promesa exitosa!");
        } else{
            reject("Impar, promesa rechazada :(");
        }
    }, 2000);
});

promisenumber.then((result) => {
    console.info (`El número es: ${result}`);
    console.log (number);
}) .catch((result) => {
    console.error("El número es: " + result);
    console.log (number);
})

//Fetch con promesa

function userName() {
    let user = document.getElementById("user").value;
    console.info(user);
}

function getGitHubUser(userName) {
    fetch("https://api.github.com/users/" + userName)
    .then(response => response.json())
    .then(json => {
        console.info(json);
    }).catch(error => {
        console.error("Usuario no encontrado", error);
    });
}
