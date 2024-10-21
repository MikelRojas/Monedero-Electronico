
import { Pool } from 'pg';

// Crear un pool de conexiones
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'server_local',
  password: 'marr5604',
  port: 5432,
});

// Función para hacer consultas a la base de datos
export async function ConsultProductos() {
  try {
    const result = await pool.query('SELECT * FROM productos');
    console.log(result.rows);
  } catch (err) {
    console.log('Error ejecutando la consulta', err);
  }
}


