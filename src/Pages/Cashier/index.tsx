import { ChangeEvent, FormEvent, useState } from 'react'
import Table from '../../components/Table'
import Qr from '../../components/Qr';

const Cashier = () => {
  const [qr,setQr] = useState<string>("");
  const [formData, setFormData] = useState({
    id_client: ''
  });

  // Maneja los cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target; // Extrae el id y el valor del input
    setFormData((prevData) => ({
      ...prevData,
      [id]: value // Actualiza el estado de acuerdo con el id del input
    }));
  };

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault(); 
        setQr(`http://127.0.0.1:5000/verificacion_cliente?id=${formData.id_client}`)
    }

  return (
    <div className='container'>
        <form>
            <div className="d-flex flex-row mb-3">
                <div className="mb-3 p-2">
                    <label className="form-label">Codigo de producto</label>
                    <input type="number" className="form-control" id="cod_producto"/>
                </div>
                <div className="mb-3 p-2">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad"/>
                </div>
                <button type="submit" className="btn btn-primary p-2 btn_add">Agregar</button>
            </div>
        </form>
        <div className="d-flex flex-row mb-5">
            <Table columns={["Codigo","Producto","Cantidad","Monto"]} data={[]} className='table table-bordered' styles={{}}/>
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
