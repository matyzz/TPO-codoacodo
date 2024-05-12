function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var motivo = document.getElementById('motivo').value;
    var opciones = document.querySelectorAll('input[name="opciones"]:checked').length;
    var imagen = document.getElementById('imagen').value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        return false;
    }

    if (email === '') {
        alert('Por favor, ingrese su correo electrónico.');
        return false;
    }

    if (telefono === '') {
        alert('Por favor, ingrese su número de teléfono.');
        return false;
    }

    if (mensaje === '') {
        alert('Por favor, ingrese su mensaje.');
        return false;
    }

    if (motivo === '') {
        alert('Por favor, seleccione un motivo.');
        return false;
    }

    if (opciones === 0) {
        alert('Por favor, seleccione al menos una opción.');
        return false;
    }

    if (imagen === '') {
        alert('Por favor, seleccione una imagen.');
        return false;
    }

    return true;
}

// Función para asegurar que solo una opción se puede seleccionar en el checkbox
function checkOnlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name);
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}
