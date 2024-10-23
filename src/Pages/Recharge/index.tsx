import { ChangeEvent, FormEvent, useState } from "react";
import Qr from "../../components/Qr";

/**
 * Componente para realizar recargas a clientes.
 * Este componente permite a los usuarios ingresar el ID del cliente y el monto de la recarga,
 * y genera un código QR con la información correspondiente.
 * 
 * @returns {JSX.Element} El componente de recarga renderizado.
 * 
 * @example
 * <Recharge />
 */
const Recharge = () => {
    const [qr,setQr] = useState<string>("");
    const [formData, setFormData] = useState({
        id_client: '',
        monto:0.00,
      });

      /**
     * Maneja los cambios en los inputs del formulario.
     * 
     * @param {ChangeEvent<HTMLInputElement>} e - El evento de cambio del input.
     */
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target; // Extrae el id y el valor del input
        setFormData((prevData) => ({
            ...prevData,
            [id]: value // Actualiza el estado de acuerdo con el id del input
        }));
    }

    /**
     * Maneja el envío del formulario para solicitar una recarga.
     * 
     * @param {FormEvent<HTMLFormElement>} e - El evento de envío del formulario.
     */
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
            if(result.estado){
                const response = await fetch(`http://127.0.0.1:5000/recargar_cliente?id=${formData.id_client}&monto=${formData.monto}`);
                if (!response.ok) {
                throw new Error('Error en la petición');
                }
                const result = await response.json();
                if(result.success){
                  alert("Recarga exitosa");
                } else {
                  alert("Recarga fallida");
                }
            }
            setQr("");
          } catch (error: any) {
            console.log(error);
            setQr("");
          } 
        };
  
        fetchData();
        
    }
  return (
    <div className='container'>
        <div className="d-flex flex-row mb-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">ID cliente</label>
                    <input type="number" className="form-control input_form" id="id_client" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Monto</label>
                    <input type="number" className="form-control input_form" id="monto" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Solicitar QR</button>
            </form>
            {qr === "" ? (
                <img src="/public/images/qr_default.png" className="img-fluid img_qr" alt="Your Qr"></img>
            ):(
                <Qr url={qr} />
            )}
        </div>
    </div>
  )
}

export default Recharge