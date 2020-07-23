let searchUser = function search() {
    let userName = document.getElementById("search-username").value,
        table = document.getElementById('guthub');

    function getGitHubUser(userName) {
        fetch("https://api.github.com/users/" + userName)
            .then(response => response.json())
            .then(json => {
                console.table(json);
                var keys = Object.keys(json);
                var values = Object.values(json);

                deleteRows(table);

                for (let i = 0, jsonLength = keys.length; i < jsonLength; i += 1) {
                    printRow(table, keys[i], values[i]);
                }
            }).catch(error => {
                console.error("No se pudo encontrar al usuario", error);
            });
    }

    function printRow(table, key, value) {
        txtKey = document.createTextNode(key);
        txtValue = document.createTextNode(value);
        tdKey = document.createElement('td');
        tdValue = document.createElement('td');
        tr = document.createElement('tr');

        tdKey.appendChild(txtKey);
        tdValue.appendChild(txtValue);
        tr.appendChild(tdKey);
        tr.appendChild(tdValue);
        table.appendChild(tr);
    }

    function deleteRows(table) {
        table.querySelectorAll('tr').forEach(node => node.remove());
    }

    getGitHubUser(userName);
}