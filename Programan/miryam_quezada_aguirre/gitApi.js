
document.getElementById('getUserApi').addEventListener('click', getUser);

function getUser(){
	  let userName = document.getElementById("title").value
      //fetch('https://jsonplaceholder.typicode.com/posts')
	  fetch("https://api.github.com/users/" + userName)
      .then((res) => res.json())
      .then((data) => {
        
		
		let longitud = Object.keys(data).length;
			console.info("longitud: "+ longitud);
			console.info(": "+ Object.entries(data));
			let divElement=document.getElementById("result");
			//console.log("soy el div y existo:"+divElement);
			divElement.innerHTML = ''; //borrar lo que ya existe en el nodo y sobreescriba

			let counter = 1;
				Object.entries(data).forEach(([key, value]) => {
					console.log(key + ' ' + value); // ""  
					let paragraph = document.createElement("p");
					paragraph.textContent = counter+".- \t"+key+": "+value;
					divElement.appendChild(paragraph);
					counter+=1;
				});
			
        
      })
	  .catch(error => {
            console.error("No se pudo obtener la información", error);
	  })
    }

