let promiseNum = new Promise((resolve, reject) => {
    const randNumber=Math.ceil(Math.random() * 10)
    console.log(randNumber);
    if (randNumber%2==0){
        resolve("La promesa fue resuelta");
    }
    else{
        reject("La promesa se rechazo");
    }
});

promiseNum.then((result) => {
    console.log(result); 
  }).catch((errorMessage)=>{
	  console.info("Error de promesa: " + errorMessage);
  });
  