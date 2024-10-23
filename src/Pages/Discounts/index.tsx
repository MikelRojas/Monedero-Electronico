import { ChangeEvent, FormEvent, useState } from 'react';

/**
 * Componente para aplicar descuentos.
 * Este componente permite a los usuarios ingresar la descripción,
 * el porcentaje de descuento y la fecha de finalización para aplicar un descuento.
 * 
 * @returns {JSX.Element} El componente de descuentos renderizado.
 * 
 * @example
 * <Discounts />
 */
const Discounts = () => {
    const [formData, setFormData] = useState({
        descripcion: '',
        descuento: 0,
        fechaFin: '',  
    });

    const today = new Date().toISOString().split('T')[0];

    /**
     * Maneja el envío del formulario para aplicar el descuento.
     * 
     * @param {FormEvent<HTMLFormElement>} event - El evento de envío del formulario.
     */

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (!formData.descripcion || !formData.descuento || !formData.fechaFin) {
            alert("Por favor completa todos los campos");
            return;
        }

        fetch('http://127.0.0.1:5000/insertar_promocion', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                descripcion: formData.descripcion,
                porcentaje_descuento: formData.descuento,
                fecha_fin: formData.fechaFin,
                nodo_id: null,  
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Descuento aplicado exitosamente");
            } else {
                alert("Error al aplicar el descuento: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al conectar con el servidor.');
        });
    }

    /**
     * Maneja los cambios en los inputs del formulario.
     * 
     * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - El evento de cambio del input.
     */
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { id, value } = e.target; // Extrae el id y el valor del input
        setFormData((prevData) => ({
            ...prevData,
            [id]: value // Actualiza el estado de acuerdo con el id del input
        }));
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Porcentaje Descuento</label>
                    <input 
                        type="number" 
                        className="form-control input_form" 
                        id="descuento" 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-floating">
                    <label className="form-label">Descripción Descuento</label>
                    <textarea 
                        className="form-control" 
                        id="descripcion" 
                        style={{ height: 100 }} 
                        onChange={handleChange} 
                    />
                </div>

                {/* Campo para seleccionar la fecha de finalización */}
                <div className="mb-3">
                    <label className="form-label">Fecha Fin Descuento</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="fechaFin" 
                        onChange={handleChange} 
                        min={today}  // Establece que solo se puedan seleccionar fechas desde hoy
                    />
                </div>

                <button type="submit" className="btn btn-primary">Aplicar descuento</button>
            </form>
        </div>
    );
};

export default Discounts;