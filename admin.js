import { supabase } from './supabaseClient';

// Crear administrador
export async function crearAdministrador(email, password, nombre, rol = 'administrador') {
  const { data, error } = await supabase
    .from('administradores')
    .insert([{ email, password, nombre, rol }]);
  if (error) {
    console.error('Error creando administrador:', error.message);
    return null;
  }
  return data;
}

// Cargar productos
export async function cargarProducto(nombre, descripcion, precio, imagenUrl) {
  const { data, error } = await supabase
    .from('productos')
    .insert([{ nombre, descripcion, precio, imagen: imagenUrl }]);
  if (error) {
    console.error('Error cargando producto:', error.message);
    return null;
  }
  return data;
}
