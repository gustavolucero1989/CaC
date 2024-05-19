document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validarFormulario()) {
    mostrarMensajeExito();
  }
});

function validarFormulario() {
  // Obtener los elementos del formulario
  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("email");
  var telefono = document.getElementById("telefono");

  // Obtener los elementos de error
  var errorNombre = document.querySelector(".grupoNombre .grupoError");
  var errorCorreo = document.querySelector(".grupoEmail .grupoError");
  var errorTelefono = document.querySelector(".grupoTelefono .grupoError");
  var errorMensaje = document.querySelector(".grupoMensaje .grupoError");

  // Limpiar mensajes de error previos
  errorNombre.style.display = "none";
  errorCorreo.style.display = "none";
  errorTelefono.style.display = "none";
  errorMensaje.style.display = "none";

  var isValid = true;

  // Validar nombre
  if (nombre.value.trim() === "") {
    nombre.style.border = "3px solid red";
    errorNombre.style.display = "block";
    isValid = false;
  } else {
    nombre.style.border = "3px solid #2e3741";
  }

  // Validar correo
  if (correo.value.trim() === "") {
    correo.style.border = "3px solid red";
    errorCorreo.textContent = "Proporciona un Correo Electrónico válido";
    errorCorreo.style.display = "block";
    isValid = false;
  } else {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(correo.value)) {
      correo.style.border = "3px solid red";
      errorCorreo.textContent = "Proporciona un Correo Electrónico válido";
      errorCorreo.style.display = "block";
      isValid = false;
    } else {
      correo.style.border = "3px solid #2e3741";
    }
  }

  // Validar teléfono
  if (telefono.value.trim() === "") {
    telefono.style.border = "3px solid red";
    errorTelefono.textContent = "Proporciona un Correo Electrónico válido";
    errorTelefono.style.display = "block";
    isValid = false;
  } else if (isNaN(telefono.value)) {
    telefono.style.border = "3px solid red";
    isValid = false;
  } else {
    telefono.style.border = "3px solid #2e3741";
  }

  // Validar mensaje
  var mensaje = document.getElementById("mensaje");
  if (mensaje.value.trim() === "") {
    mensaje.style.border = "3px solid red";
    errorMensaje.style.display = "block";
    isValid = false;
  } else {
    mensaje.style.border = "3px solid #2e3741";
  }

  return isValid;
}

function mostrarMensajeExito() {
  var mensajeExito = document.querySelector(".formularioEnviado");
  mensajeExito.style.display = "block";
}

// Event listeners para limpiar errores en tiempo real
document.getElementById("nombre").addEventListener("input", limpiarErrorNombre);
document.getElementById("email").addEventListener("input", limpiarErrorCorreo);
document
  .getElementById("telefono")
  .addEventListener("input", limpiarErrorTelefono);
document
  .getElementById("mensaje")
  .addEventListener("input", limpiarErrorMensaje);

function limpiarErrorNombre() {
  var nombre = document.getElementById("nombre");
  var errorNombre = document.querySelector(".grupoNombre .grupoError");
  if (nombre.value.trim() !== "") {
    nombre.style.border = "3px solid #2e3741";
    errorNombre.style.display = "none";
  }
}

function limpiarErrorCorreo() {
  var correo = document.getElementById("email");
  var errorCorreo = document.querySelector(".grupoEmail .grupoError");
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(correo.value)) {
    correo.style.border = "3px solid #2e3741";
    errorCorreo.style.display = "none";
  }
}

function limpiarErrorTelefono() {
  var telefono = document.getElementById("telefono");
  var errorTelefono = document.querySelector(".grupoTelefono .grupoError");
  if (telefono.value.trim() !== "" && !isNaN(telefono.value)) {
    telefono.style.border = "3px solid #2e3741";
    errorTelefono.style.display = "none";
  }
}

function limpiarErrorMensaje() {
  var mensaje = document.getElementById("mensaje");
  var errorMensaje = document.querySelector(".grupoMensaje .grupoError");
  if (mensaje.value.trim() !== "") {
    mensaje.style.border = "3px solid #2e3741";
    errorMensaje.style.display = "none";
  }
}
