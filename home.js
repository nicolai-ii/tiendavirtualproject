// Creacion del modal para registro del usuario
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // Obtén los valores del formulario
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
    
//     // Logica para verificar las credenciales (por ejemplo, usando fetch para comunicarte con un back-end)
//     console.log(`Usuario: ${username}, Contraseña: ${password}`);
    
//     // Simulación de inicio de sesión exitoso
//     alert("Inicio de sesión exitoso");
    
//     // Cerrar el modal después del inicio de sesión
//     var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
//     myModal.hide();
// });

// Obtener una referencia al formulario y al enlace de registro
const loginForm = document.getElementById('loginForm');
const registerLink = document.getElementById('registerLink');

// Agregar evento de envío al formulario
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simular la verificación de credenciales (reemplazar con tu lógica real)
    if (username === 'usuario_valido' && password === 'contraseña_valida') {
        console.log('Inicio de sesión exitoso');
        alert('Inicio de sesión exitoso');

        // Cerrar el modal
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.hide();
    } else {
        // Mostrar un mensaje al usuario antes de redirigir
        alert('Usuario o contraseña incorrectos. Serás redirigido a la página de registro.');

        // Redirigir a la página de registro
        window.location.href = 'registro.html';
    }
});

// Agregar evento de clic al enlace de registro
registerLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'registro.html';
});