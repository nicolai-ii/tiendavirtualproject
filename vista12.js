// Array para almacenar los clientes
let clients = [];

// Función para buscar clientes
function searchClient() {
    const searchInput = document.getElementById('searchClientInput').value.toLowerCase();
    const filteredClients = clients.filter(client => 
        client.name.toLowerCase().includes(searchInput) ||
        client.id.toLowerCase().includes(searchInput) ||
        client.email.toLowerCase().includes(searchInput)
    );

    renderClients(filteredClients);
}

// Función para agregar un nuevo cliente
function addClient(event) {
    event.preventDefault();

    const clientName = document.getElementById('clientName').value;
    const clientId = document.getElementById('clientId').value;
    const clientEmail = document.getElementById('clientEmail').value;
    const clientPhone = document.getElementById('clientPhone').value;
    const clientAddress = document.getElementById('clientAddress').value;
    const clientCity = document.getElementById('clientCity').value;

    const newClient = {
        name: clientName,
        id: clientId,
        email: clientEmail,
        phone: clientPhone,
        address: clientAddress,
        city: clientCity
    };

    clients.push(newClient);
    renderClients(clients);

    // Limpiar el formulario después de agregar el cliente
    document.getElementById('addClientForm').reset();
}

// Función para renderizar los clientes en la tabla
function renderClients(clientList) {
    const tbody = document.querySelector('#clientsTable tbody');
    tbody.innerHTML = '';

    clientList.forEach((client, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${client.name}</td>
            <td>${client.id}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.address}</td>
            <td>${client.city}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteClient(${index})">Eliminar</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// Función para eliminar un cliente
function deleteClient(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        clients.splice(index, 1);
        renderClients(clients);
    }
}
