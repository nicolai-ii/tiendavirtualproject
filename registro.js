

// Importar credenciales privadas
import * as dotenv from 'dotenv';
dotenv.config();


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

document.addEventListener("DOMContentLoaded", function() {
    // Manejo de los checkboxes
    const checkboxes = document.querySelectorAll('.section-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const target = this.getAttribute('data-target');
            const section = document.getElementById(target);

            if (this.checked) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
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

        const usuario = {
            nombre,
            apellido,
            identificacion,
            telefono,
            direccion,
            password,
        };

        try {
            const { data, error } = await supabase.auth.signUp({
                email: `${nombre}@example.com`, // Supón que el email es el nombre para fines de ejemplo
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
            } else {
                successMessage.textContent = 'Usuario creado exitosamente. ¡Bienvenido!';
                errorMessage.textContent = ''; // Limpia el mensaje de error
                form.reset(); // Limpia el formulario
            }
        } catch (error) {
            console.error(error);
            errorMessage.textContent = 'Error inesperado: ' + error.message;
        }
    });
});













// ---------------------------



// document.addEventListener("DOMContentLoaded", function() {
//     // Obtenemos todos los checkboxes
//     const checkboxes = document.querySelectorAll('.section-checkbox');

//     // Añadimos un evento a cada checkbox
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', function() {
//             const target = this.getAttribute('data-target');
//             const section = document.getElementById(target);

//             // Mostrar u ocultar la sección correspondiente
//             if (this.checked) {
//                 section.style.display = 'block';
//             } else {
//                 section.style.display = 'none';
//             }
//         });
//     });
// });



// //Conexion a base de datos
// const form = document.getElementById('myForm');
// const registrarBtn = document.getElementById('registrarBtn');
// const errorMessage = document.getElementById('errorMessage'); // Elemento para mostrar mensajes de error
// const successMessage = document.getElementById('successMessage'); // Elemento para mostrar mensajes de éxito

// registrarBtn.addEventListener('click', async (event) => {
//   event.preventDefault();

//   // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value;
//     const apellido = document.getElementById('apellido').value;
//     const identificacion = document.getElementById('identificacion').value;
//     const telefono = document.getElementById('telefono').value;
//     const direccion = document.getElementById('direccion').value;
//     const password = document.getElementById('password').value;

//   // Validación   básica de los datos
//   if (!nombre || !apellido || !identificacion || !telefono || !direccion || !password) {
//     errorMessage.textContent = 'Por favor, completa todos los campos.';
//     return;
//   }

//   // Crear un objeto con los datos del usuario
//   const usuario = {
//     nombre,
//     apellido,
//     identificacion,
//     telefono,
//     direccion,
//     password,
//   };

//   // Inicializar el cliente de Supabase (reemplaza con tus claves)
//   const supabase = createClient('https://hzsuccgzdjbfbahiyzey.supabase.co', 'Caribesoy234*');

//   try {
//     const { user, error } = await supabase.auth.signUp(usuario);

//     if (error) {
//       errorMessage.textContent = 'Error al registrar el usuario: ' + error.message;
//     } else {
//       successMessage.textContent = 'Usuario creado exitosamente. ¡Bienvenido!';
//       // Redirigir a otra página (opcional)
//       // window.location.href = '/login';
//     }
//   } catch (error) {
//     console.error(error);
//     errorMessage.textContent = 'Error inesperado: ' + error.message;
//   }
// });

