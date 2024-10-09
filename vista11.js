// Función para buscar proveedores en la tabla
function searchProvider() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('providersTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length - 1; j++) { // Excluye la última columna (Acción)
            if (cells[j].textContent.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        rows[i].style.display = found ? '' : 'none';
    }
}

// Función para agregar un nuevo proveedor
function addProvider(event) {
    event.preventDefault(); // Evita que la página se recargue

    const providerName = document.getElementById('providerName').value;
    const nit = document.getElementById('nit').value;
    const representative = document.getElementById('representative').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    const table = document.getElementById('providersTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${providerName}</td>
        <td>${nit}</td>
        <td>${representative}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${city}</td>
        <td><button class="btn btn-danger" onclick="deleteProvider(this)">Eliminar</button></td>
    `;

    // Limpiar el formulario
    document.getElementById('addProviderForm').reset();
}

// Función para eliminar un proveedor
function deleteProvider(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}
// Función para redirigir a diferentes vistas
function navigateTo(view) {
    if (view === 'proveedores') {
        window.location.href = 'vista11.html'; // Asegúrate de que la ruta del archivo sea correcta
    } else if (view === 'productos') {
        window.location.href = 'vista10.html';
    } 
    
}
