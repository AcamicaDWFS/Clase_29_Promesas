/*Traer información de la API de github*/
//Hacer fetch de la información de un usuario de github por nombre
//Hacer fetch de la información de los followers de ese usuario (con el endpoint devuelto en el fetch anterior) y hacer console.log del nombre de usuario de los primeros 5 followers.

function getGitHubUser(userName) {
    fetch("https://api.github.com/users/" + userName)
        .then(response => response.json())
        .then(json => {
            console.info(json);
            getUserFirt5Followers(json.followers_url);
        }).catch(error => {
            console.error("No se pudo obtener la información", error);
        });
}

function getUserFirt5Followers(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            for (let index = 0; index < 1; index += 1) {
                console.info(json[index].login);
            }
        }).catch(error => {
            console.error("No se pudo obtener la información", error);
        });
}

getGitHubUser("cyberhavok");
//getGitHubUser("celara91");
//getGitHubUser("megumiEvasn");
/*getGitHubUser("cyberhavok");
getGitHubUser("cyberhavok");
getGitHubUser("cyberhavok");
getGitHubUser("cyberhavok");
getGitHubUser("cyberhavok");
getGitHubUser("cyberhavok");
getGitHubUser("cyberhavok"); */