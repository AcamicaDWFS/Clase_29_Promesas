let numeros = new Promise((resolve, reject) => {
    let num = parseInt(Math.random() * 10);
    if( num > 0 && num < 10){
        resolve(num);
    } else {
        reject(num);
    }
});

let numSetTime = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let num = parseInt(Math.random() * 10);
    if( num > 0 && num < 10){
        resolve(num);
    } else {
        reject(num);
    }
    },2000);
});

numeros.then(res => console.log('Número mayor: ' + res)).catch(e => console.error('Número menor: ' + e));
numSetTime.then(res => console.log('Número mayor: ' + res)).catch(e => console.error('Número menor: ' + e));

function buscar(){
    const URL = "https://api.github.com/users/";
    const USER = document.getElementById('user').value;
    if(USER && user !== ''){
        fetch(`${URL}${USER}`).then(res => res.json())
            .then(user => {
                if(user.message){
                    console.error(`Usuario ${USER} no encontrado`);
                } else {
                    console.log(user);
                }
            }).catch(e => console.error(`Usuario ${USER} no encontrado`, e));
    }
}