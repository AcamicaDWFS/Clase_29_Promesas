const randomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
    }, 200);
});

randomNumber
    .then((res) => {
        let number = res % 2;
        console.log('number: ', res);
        if (!number & res != 0) {
            console.warn('¡Número par! 🥳');
        } else if (number) {
            throw new Error('Número impar. 😔');
        } else {
            console.warn('El número no es par ni impar. 🤓');
        }
    })
    .catch((err) => {
        console.error(err.message);
    });