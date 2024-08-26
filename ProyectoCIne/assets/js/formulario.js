const inputText = document.querySelector("#username");
const labelText = document.querySelector("#basic-addon1");
const apellidoInput = document.querySelector("#apellido");
const correoInput = document.querySelector("#correo");
const mensajeInput = document.querySelector("#mensaje");
const enviarBtn = document.querySelector("#btnEnviar");



if (inputText != null) {
  inputText.addEventListener("keyup", (event) => {
    console.log(event.key);
    labelText.innerHTML += event.key;
    if (event.key === "Backspace" || event.key === "Delete") {
      labelText.innerHTML = "Nombre " + inputText.value;
    }
  });
}

document.addEventListener('keypress', (event)=> {
    //console.log(event.key)
    if(/^\S+@\S+\.\S+$/.test(correoInput.value)){
        verificarInputs()
    } else {
        console.log("correo invalido")
    }
    
})

function verificarInputs() {
  if (
    inputText.value != "" &&
    apellidoInput.value != "" &&
    correoInput.value != "" &&
    mensajeInput.value != ""
  ) {
    enviarBtn.disabled = false;
  } else {
    enviarBtn.disabled = true;
  }
}
