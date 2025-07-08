async function sha256(texto) {
  const encoder = new TextEncoder();
  const data = encoder.encode(texto);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

function cambiarVentana(result){
    let datos = result[0];

    if(datos != null && datos.admin > 0){
        window.location.href = "http://localhost:3000/dashboard"
    }else if (datos != null && datos.admin < 1){
        window.location.href = "http://127.0.0.1:5500/frontend/index.html"
    }
}

function validarUsuario(){
    const url = "http://localhost:3000/api";
    let loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async(event) =>{
        event.preventDefault() 

        let formData = new FormData(event.target); 

        let data = Object.fromEntries(formData.entries()); 

        const email = data.email;
        const password = await sha256(data.password);

        try{
            let response = await fetch(`${url}/users`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email, password})   
            })

            if(response.ok){
                let result = await response.json();
                
                console.log(result.message);

                cambiarVentana(result.payload);
            }else{
                let error = await response.json();
                console.log("Error:", error.meessage)
            }
        }catch(error){
            console.log("Error al enviar los datos", error);
        }
    });
}

function init(){
    validarUsuario();
}

init();