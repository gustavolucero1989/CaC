/*const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')
const textarea = document.getElementById('mensaje')
const select = document.getElementById('select')


const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}

const validarFormulario = (e) => {
   switch (e.target.name){
    case "nombre":
        console.log("holaasd");
    break;

    case "email":
        console.log("mail");
    break;

    case "telefono":
        console.log("telefono");
    break;

    case "ciudad":
        console.log("ciudad");
    break;

    case "otroPais":
        console.log("otrpais");
    break;

    case "check":
        console.log("check");
    break;

    case "select":
        console.log();
    break;

    case "mensaje":
        console.log("feooo");
    break;

   };

}

inputs.forEach((input)=>{
    
    if(input.type === 'checkbox'){
        input.addEventListener('change',validarFormulario);
    }else{
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    }
})

textarea.addEventListener('keyup', validarFormulario);    
textarea.addEventListener('blur', validarFormulario);

select.addEventListener('change', validarFormulario);    
//select.addEventListener('blur', validarFormulario);

 */


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
  
    // Validar nombre
    if (nombre === "") {
      alert("Por favor ingrese su nombre.");
      return false;
    }
  
    // Validar correo electrónico
    if (correo === "") {
      alert("Por favor ingrese su correo electrónico.");
      return false;
    } else {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(correo)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false;
      }
    }
  
  
    // Validar teléfono
    if (telefono === "") {
      alert("Por favor ingrese su número de teléfono.");
      return false;
    } else if (isNaN(telefono)) {
      alert("El número de teléfono debe ser un número.");
      return false;
    }
  
    // Si todas las validaciones pasan, devuelve true para enviar el formulario
    return true;
  }