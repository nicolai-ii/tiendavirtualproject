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



// Conexion a base de datos
import { createClient } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';

const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const identificacion = document.getElementById('identificacion').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  // Insertar los datos en la tabla de usuarios
  const { error } = await supabase
    .from('usuarios')
    .insert({
      nombre,
      apellido,
      identificacion,
      telefono,
      direccion,
      email,
      password
    });

  if (error) {
    console.error(error);
    // Mostrar un mensaje de error al usuario
  } else {
    // Mostrar un mensaje de éxito al usuario
    console.log('Usuario registrado correctamente');
  }
});
