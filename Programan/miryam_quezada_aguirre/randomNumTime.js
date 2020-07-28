let promiseDelayed= new Promise((resolve, reject) => {
   setTimeout(function () {
        const randNumber=Math.ceil(Math.random() * 10)
		console.log("setTimeout: "+randNumber);
		
		if (randNumber%2==0){
			resolve("La promesa fue resuelta");
		}
		else{
			reject("La promesa se rechazo");
		}
    }, 2000);
    
});

promiseDelayed.then((result) => {
    console.log(result); 
  }).catch((errorMessage)=>{
	  console.info("Error de promesa: " + errorMessage);
  });