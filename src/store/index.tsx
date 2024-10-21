
export const saveNodeIndex = (id: number | null) => {
  sessionStorage.setItem('nodeId', id !== null ? id.toString() : "any")
};

export const getNodeIndex = () => {
    const id = sessionStorage.getItem('nodeId');
    if (id === null || id === "any") {
      return null; 
    }
    return parseInt(id, 10); 
};

export const saveProducts = (data: Array<Array<number|string>> | null) => {
  sessionStorage.setItem('products', data !== null ? JSON.stringify(data) : '[]');
};

export const getProducts = (): Array<Array<number|string>> => {
  const data = sessionStorage.getItem('products');
  return data ? JSON.parse(data) : [];
};

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