//Función para validar la contraseña
document.getElementById("registro").addEventListener("submit", function (event) {
    var contrasena = document.getElementById("contrasena").value;
    var contrasena2 = document.getElementById("contrasena2").value;
    var errorSpan = document.getElementById("error");

    // Resetear mensaje de error
    errorSpan.style.display = "none";
    errorSpan.textContent = "";

    // Validar requisitos de contraseña
    var contrasenaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena);
    if (!contrasenaValida) {
        errorSpan.style.display = "block";
        errorSpan.textContent = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.";
        event.preventDefault();
        return false;
    }

    // Verificar que las contraseñas coincidan
    if (contrasena !== contrasena2) {
        errorSpan.style.display = "block";
        errorSpan.textContent = "Las contraseñas no coinciden.";
        event.preventDefault();
        return false;
    }

    return true;
});

//Función para mostrar u ocultar la contraseña
function togglePasswordVisibility() {
    var contrasena = document.getElementById("contrasena");
    var contrasena2 = document.getElementById("contrasena2");
    var tipo = contrasena.type === "password" ? "text" : "password";

    contrasena.type = tipo;
    contrasena2.type = tipo;
}
