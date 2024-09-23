// Creacion del modal para registro del usuario
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtén los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar tu lógica para verificar las credenciales (por ejemplo, usando fetch para comunicarte con un back-end)
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    
    // Simulación de inicio de sesión exitoso
    alert("Inicio de sesión exitoso");
    
    // Cerrar el modal después del inicio de sesión
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
    myModal.hide();
});


