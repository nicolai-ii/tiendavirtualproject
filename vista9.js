document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form.d-flex');
    const inputs = form.querySelectorAll('input.form-control');
    const registerButton = form.querySelector('button.btn.btn-success');
    const tableBody = document.querySelector('table.table tbody');

    // Evento para el botón de registro
    registerButton.addEventListener('click', function () {
        const nombreUsuario = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value.trim();

        // Validación simple
        if (nombreUsuario === '' || email === '' || password === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Fecha actual
        const fechaActual = new Date().toLocaleDateString();

        // Crear nueva fila en la tabla
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${nombreUsuario}</td>
            <td>${email}</td>
            <td>${fechaActual}</td>
            <td>
                <button class="btn btn-edit btn-primary"><i class="bi bi-grid"></i></button>
                <button class="btn btn-delete btn-danger"><i class="bi bi-trash"></i></button>
            </td>
        `;

        // Agregar eventos a los botones de la nueva fila
        const editButton = nuevaFila.querySelector('.btn-edit');
        const deleteButton = nuevaFila.querySelector('.btn-delete');

        editButton.addEventListener('click', function () {
            // Rellenar el formulario con los datos actuales para editar
            inputs[0].value = nombreUsuario;
            inputs[1].value = email;
            inputs[2].value = ''; // No mostrar la contraseña por seguridad
        });

        deleteButton.addEventListener('click', function () {
            // Eliminar la fila de la tabla
            tableBody.removeChild(nuevaFila);
        });

        // Agregar la nueva fila al cuerpo de la tabla
        tableBody.appendChild(nuevaFila);

        // Limpiar el formulario
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';
    });

    // Agregar eventos a los botones de eliminar y editar existentes
    const existingDeleteButtons = tableBody.querySelectorAll('.btn-delete');
    existingDeleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const row = button.closest('tr');
            tableBody.removeChild(row);
        });
    });

    const existingEditButtons = tableBody.querySelectorAll('.btn-edit');
    existingEditButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const row = button.closest('tr');
            const cells = row.querySelectorAll('td');
            inputs[0].value = cells[0].textContent;
            inputs[1].value = cells[1].textContent;
            inputs[2].value = ''; // No mostrar la contraseña por seguridad
        });
    });
});
