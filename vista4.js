document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos todos los checkboxes
    const checkboxes = document.querySelectorAll('.section-checkbox');

    // Añadimos un evento a cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const target = this.getAttribute('data-target');
            const section = document.getElementById(target);

            // Mostrar u ocultar la sección correspondiente
            if (this.checked) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
