let searchUser = function search() {
    let userName = document.getElementById("search-username").value;

    function getGitHubUser(userName) {
        fetch("https://api.github.com/users/" + userName)
            .then(response => response.json())
            .then(json => {
                console.table(json);
            }).catch(error => {
                console.error("No se pudo encontrar al usuario", error);
            });
    }

    getGitHubUser(userName);
}