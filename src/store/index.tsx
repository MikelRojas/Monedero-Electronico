/**
 * Guarda el índice del nodo en el almacenamiento de sesión.
 * 
 * @param {number | null} id - El ID del nodo a guardar. Si es null, se guarda "any".
 */
export const saveNodeIndex = (id: number | null) => {
  sessionStorage.setItem('nodeId', id !== null ? id.toString() : "any")
};

/**
 * Obtiene el índice del nodo del almacenamiento de sesión.
 * 
 * @returns {number | null} El ID del nodo si existe, o null si no.
 */
export const getNodeIndex = () => {
    const id = sessionStorage.getItem('nodeId');
    if (id === null || id === "any") {
      return null; 
    }
    return parseInt(id, 10); 
};

/**
 * Guarda los productos en el almacenamiento de sesión.
 * 
 * @param {Array<Array<number|string>> | null} data - Los productos a guardar. Si es null, se guarda un array vacío.
 */
export const saveProducts = (data: Array<Array<number|string>> | null) => {
  sessionStorage.setItem('products', data !== null ? JSON.stringify(data) : '[]');
};

/**
 * Obtiene los productos del almacenamiento de sesión.
 * 
 * @returns {Array<Array<number|string>>} Un array de productos. Si no hay productos guardados, se devuelve un array vacío.
 */
export const getProducts = (): Array<Array<number|string>> => {
  const data = sessionStorage.getItem('products');
  return data ? JSON.parse(data) : [];
};

/**
 * Actualiza los productos mediante una llamada a la API y los guarda en el almacenamiento de sesión.
 * 
 * @async
 * @returns {Promise<void>} Una promesa que se resuelve cuando se completa la actualización.
 */
export const updateProducts = async () => {
  const response = await fetch("http://127.0.0.1:5000/obtener_productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      host: "localhost",
      dbname: "server_local",
      user: "postgres",
      password: "marr5604",
      port: "5432",
    }),
  });

  const result = await response.json();
  saveProducts(result.data)
};