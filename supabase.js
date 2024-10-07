import { createClient } from '@supabase/supabase-js';

// Configura tus credenciales de Supabase
const supabaseUrl = 'https://hzsuccgzdjbfbahiyzey.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c3VjY2d6ZGpiZmJhaGl5emV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyNjM3NTIsImV4cCI6MjA0MzgzOTc1Mn0.P2_Eow-rZdjp1eyk-dEn8uiNP43xMORvuJeD__Cojd0';

// Crea el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

// Funciones de autenticación
export async function registrarUsuario(email, password, nombre) {
  // Validación básica
  if (!email || !password || !nombre) {
    throw new Error('Todos los campos son requeridos');
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nombre
        }
      }
    });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
}

export async function iniciarSesion(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
}

// Funciones para administrar usuarios
export async function crearAdministrador(email, password, nombre, rol = 'administrador') {
  try {
    const { data, error } = await supabase
      .from('administradores')
      .insert([{ email, password, nombre, rol }]);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error al crear administrador:', error);
    throw error;
  }
}

// Funciones para administrar productos
export async function cargarProducto(nombre, descripcion, precio, imagenUrl) {
  try {
    const { data, error } = await supabase
      .from('productos')
      .insert([{ nombre, descripcion, precio, imagen: imagenUrl }]);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error al cargar producto:', error);
    throw error;
  }
}