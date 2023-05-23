/**Averigue que el POOL en vez del CLIENT, 
 * es mas factible uilizarlo, por que solo se llama una vez
 * tambien permite manejar multiples conexiones
 *  */ 
const { Pool } = require("pg");

/***
 * Podemos sacar tambien la conexion de la funcion
 */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * asi la funcion podria ser mas legible y facil de utilziar
 * @returns 
 */
async function getUsers() {
  try {
    const res = await pool.query("SELECT * FROM users;");
    return res.rows;
  } catch (err) {
    console.error("Error running query", err);
    throw err;
  } finally {
    await pool.release();
  }
}
