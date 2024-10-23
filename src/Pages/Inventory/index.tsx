import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Table from "../../components/Table";
import { getProducts, updateProducts } from "../../store";


const Inventory = () => {
    const [data ,setData] = useState<Array<Array<number|string>>|[]>([]);
    const [formData, setFormData] = useState({
        nombre: '',
        precio: 0.00,
        cantidad: 0
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target; 
        setFormData((prevData) => ({
          ...prevData,
          [id]: value 
        }));
        updateProducts();
      };

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault(); 
        const insertPrduct = async () => {
            const response = await fetch("http://127.0.0.1:5000/insertar_producto", {
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
                name: formData.nombre,
                price: formData.precio,
                stok: formData.cantidad
              }),
            });
        
            const result = await response.json();
            if(result.data === "Producto agregado con éxito."){
              alert("Producto agregado con éxito.");
            } else {
                alert("Fallo al agregar producto.");
            }
            updateProducts()
            setData(getProducts())
            setFormData({
                nombre: '',
                precio: 0.00,
                cantidad: 0
              });
        };
        insertPrduct();
    }


    useEffect(() => {
        const dataP = getProducts();
      if (dataP.length !== 0){
        setData(dataP)
      }
      else{
        updateProducts();
        setData(getProducts())
      }
    },[]);

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row mb-3">
                <div className="mb-3 p-2">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" onChange={handleChange}/>
                </div>
                <div className="mb-3 p-2">
                    <label className="form-label">Precio Unitario</label>
                    <input type="number" className="form-control" id="precio" onChange={handleChange}/>
                </div>
                <div className="mb-3 p-2">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary p-2 btn_add">Agregar</button>
            </div>
        </form>
          <button className="btn btn-primary p-2 mb-2" 
          onClick={()=>{
            updateProducts();
            window.location.reload();
          }}>Refrescar</button>
         <Table columns={["Codigo","Nombre","Precio","Stok"]} data={data} className='table table-bordered' styles={{}}/>
    </div>
  )
}

export default Inventory