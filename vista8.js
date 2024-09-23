// dashboard.js
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remover la clase 'active' de todos los enlaces
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Agregar la clase 'active' al enlace seleccionado
            this.classList.add('active');

            // Aquí podrías agregar funcionalidad para cambiar el contenido
            console.log(`Navigating to ${this.textContent}`);
        });
    });
});

// Navegacion de card alargadas del home a sesiones internas
    function navigateTo(section) {
        if (section === 'productos') {
            window.location.href = 'productos.html';
        } else if (section === 'proveedores') {
            window.location.href = 'proveedores.html';
        } else if (section === 'informes') {
            window.location.href = 'informes.html';
        }
    }
