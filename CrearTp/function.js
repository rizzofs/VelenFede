//Esta función sirve para mostrar seleccionar compañero en caso de que la opción sea grupal
// function toggleCompaneroField() {
//     const companeroField = document.getElementById('companeroField');
//     const isGrupal = document.getElementById('grupal').checked;
//     companeroField.style.display = isGrupal ? 'block' : 'none';
// }

// // Mostrar/ocultar el campo de compañero según el tipo de trabajo
// function toggleCompaneroField() {
//     const isGrupal = document.getElementById("grupal").checked;
//     const companeroField = document.getElementById("companeroField");
//     companeroField.style.display = isGrupal ? "block" : "none";
// }

function toggleCompaneroField() {
    const tipoTrabajo = document.getElementById("tipoTrabajo").value;
    const companeroField = document.getElementById("companeroField");

    if (tipoTrabajo === "Grupal") {
        companeroField.style.display = "block";
    } else {
        companeroField.style.display = "none";
    }
}

// Con esto manejo los datos almacenados en el Json para realizar pruebas
document.addEventListener("DOMContentLoaded", () => {
    const selectMateria = document.getElementById("materia");

    // Cargar los datos desde el JSON
    fetch("materias.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => {
            // Aca relleno la lista desplegable con las materias
            data.forEach(materia => {
                const option = document.createElement("option");
                option.value = materia.id;
                option.textContent = materia.nombre;
                selectMateria.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error al cargar las materias:", error);
        });
});

