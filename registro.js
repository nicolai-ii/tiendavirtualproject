// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Verifica que Supabase esté disponible
    if (typeof window.supabase === 'undefined') {
        console.error("La biblioteca supabase-js no se cargó correctamente.");
        return;
    }

    // Inicializa Supabase
    const supabaseUrl = 'https://hzsuccgzdjbfbahiyzey.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c3VjY2d6ZGpiZmJhaGl5emV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyNjM3NTIsImV4cCI6MjA0MzgzOTc1Mn0.P2_Eow-rZdjp1eyk-dEn8uiNP43xMORvuJeD__Cojd0';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

    console.log("Supabase inicializado:", supabase);

    // Manejo de los checkboxes
    const checkboxes = document.querySelectorAll('.section-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const target = this.getAttribute('data-target');
            const section = document.getElementById(target);

            if (section) {
                section.style.display = this.checked ? 'block' : 'none';
            }
        });
    });

    // Manejo del formulario de registro
    const form = document.getElementById('myForm');
    const registrarBtn = document.getElementById('registrarBtn');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    registrarBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const identificacion = document.getElementById('identificacion').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const password = document.getElementById('password').value;

        // Validación básica de los datos
        if (!nombre || !apellido || !identificacion || !telefono || !direccion || !password) {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            successMessage.textContent = ''; // Limpia el mensaje de éxito
            return;
        }

        try {
            // Registro de usuario en Supabase
            const { data, error } = await supabase.auth.signUp({
                email: `${nombre}@example.com`, // Ejemplo de email
                password: password,
                options: {
                    data: {
                        nombre,
                        apellido,
                        identificacion,
                        telefono,
                        direccion
                    }
                }
            });

            if (error) {
                errorMessage.textContent = 'Error al registrar el usuario: ' + error.message;
                console.error("Error al registrar:", error);
            } else {
                successMessage.textContent = 'Usuario creado exitosamente. ¡Bienvenido!';
                errorMessage.textContent = ''; // Limpia el mensaje de error
                form.reset(); // Limpia el formulario
            }
        } catch (error) {
            console.error("Error en el registro:", error);
            errorMessage.textContent = 'Error inesperado: ' + error.message;
        }
    });
});

