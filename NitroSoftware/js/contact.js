const formulario = document.getElementById('formulario');
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


        

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});
