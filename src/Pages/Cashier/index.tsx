import { ChangeEvent, FormEvent, useState } from 'react'
import Table from '../../components/Table'
import Qr from '../../components/Qr';
import { getProducts } from '../../store';



const Cashier = () => {
  const [qr,setQr] = useState<string>("");
  const [formData, setFormData] = useState({
    id_client: '',
    cod_producto:0,
    cantidad:0,
  });
  const [products,setProducts] = useState<Array<Array<number | string>>|[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target; // Extrae el id y el valor del input
    setFormData((prevData) => ({
      ...prevData,
      [id]: value // Actualiza el estado de acuerdo con el id del input
    }));
  }


  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
      e.preventDefault(); 
      setQr(`http://127.0.0.1:5000/respuesta_cliente?id=${formData.id_client}`);

      const apiUrl = `http://127.0.0.1:5000/verificar_cliente?id=${formData.id_client}`;
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error('Error en la petición');
          }
          const result = await response.json();
          console.log(result)
        } catch (error: any) {
          console.log(error);
        } 
      };

      fetchData();
  }

  function handleAddProduct(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault(); 
    const shoppingList = [...products]; 
    getProducts().forEach((product) => {
      if (product[0] == formData.cod_producto) {
        if (typeof product[3] === "number" && product[3] < formData.cantidad) {
          return; 
        }
        shoppingList.push([
          product[0],             
          product[1],            
          formData.cantidad,       
          typeof product[2] === "string" 
            ? parseFloat(product[2]) * formData.cantidad  
            : "invalido"                     
        ]);
      }
    });
  
    setProducts(shoppingList); 
  }
  

  return (
    <div className='container'>
        <form onSubmit={handleAddProduct}>
            <div className="d-flex flex-row mb-3">
                <div className="mb-3 p-2">
                    <label className="form-label">Codigo de producto</label>
                    <input type="number" className="form-control" id="cod_producto" onChange={handleChange}/>
                </div>
                <div className="mb-3 p-2">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary p-2 btn_add">Agregar</button>
            </div>
        </form>
        <div className="d-flex flex-row mb-5">
            <Table columns={["Codigo","Producto","Cantidad","Monto"]} data={products} className='table table-bordered' styles={{}}/>
            {qr === "" ? (
                <img src="/public/images/qr_default.png" className="img-fluid img_qr" alt="Your Qr"></img>
            ):(
                <Qr url={qr} />
            )}
            
        </div>
        <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row mb-3">
                <div className="mb-3">
                    <label className="form-label">ID cliente</label>
                    <input type="number" className="form-control" id="id_client" onChange={handleChange}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Solicitar QR</button>
        </form>
        
    </div>
    
  )
}

export default Cashier
