import { Pool } from 'pg';

/**
 * Crea un pool de conexiones para la base de datos PostgreSQL.
 * 
 * @type {Pool}
 */
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'server_local',
  password: 'marr5604',
  port: 5432,
});

/**
 * Función para consultar todos los productos en la base de datos.
 * Realiza una consulta SQL para obtener todos los registros de la tabla 'productos'.
 * 
 * @async
 * @function ConsultProductos
 * @returns {Promise<void>} No retorna ningún valor. Imprime los resultados en la consola.
 * @throws {Error} Si ocurre un error durante la consulta, se registra en la consola.
 * 
 * @example
 * await ConsultProductos();
 */
export async function ConsultProductos() {
  try {
    const result = await pool.query('SELECT * FROM productos');
    console.log(result.rows);
  } catch (err) {
    console.log('Error ejecutando la consulta', err);
  }
}
