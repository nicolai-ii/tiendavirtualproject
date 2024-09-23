document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log(`Usuario: ${username}, Contraseña: ${password}`);
        // Aquí podrías agregar lógica para enviar los datos a un servidor.
    });
});
