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

function getGitHubUser(username) {
  fetch("https://api.github.com/users/" + username)
    .then((response) => {
      if (!response.ok) {
        throw Error("No se pudo obtener la información.");
      }

      return response.json();
    })
    .then((json) => showGitHubUser(json))
    .catch((error) => alert(error));
}

function showGitHubUser(data) {
  const name = document.createElement("p");
  name.innerText = `Nombre: ${data.name}`;

  const username = document.createElement("p");
  username.innerText = `Username: ${data.login}`;

  const following = document.createElement("p");
  following.innerText = `Siguiendo a: ${data.following}`;

  const followers = document.createElement("p");
  followers.innerText = `Seguidores: ${data.followers}`;

  const url = document.createElement("a");
  url.innerText = "Perfil de GitHub";
  url.href = data.html_url;
  url.setAttribute("target", "_blank");

  document.body.append(name, username, following, followers, url);
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

// Capturar entrada y buscar usuario en GitHub.
const btn = document.querySelector("button");
const txtInput = document.querySelector("input");

btn.addEventListener("click", () => {
  const input = txtInput.value;

  if (input) {
    getGitHubUser(input);
  }
});
