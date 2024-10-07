import { supabase } from './supabaseClient';

// Registro de usuarios
export async function registrarUsuario(email, password, nombre) {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ email, password, nombre, apellido, direccion, identificacion, telefono }]);
  if (error) {
    console.error('Error registrando usuario:', error.message);
    return null;
  }
  return data;
}

// Inicio de sesión
export async function iniciarSesion(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error('Error iniciando sesión:', error.message);
    return null;
  }
  return data;
}
