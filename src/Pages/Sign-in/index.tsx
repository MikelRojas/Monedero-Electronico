import { useState, ChangeEvent, FormEvent } from 'react';
import { saveNodeIndex } from '../../store/index'

/**
 * Interfaz para el ID del nodo.
 * @interface NodeID
 * @property {number} id - ID del nodo.
 */
interface NodeID {
  id:number,
}


/**
 * Componente para iniciar sesión en un nodo.
 * Permite a los usuarios ingresar el nombre del nodo y la contraseña,
 * y valida los datos con una API.
 * 
 * @returns {JSX.Element} El componente de inicio de sesión renderizado.
 * 
 * @example
 * <Sign_in />
 */
const Sign_in = () => {
  const [formData, setFormData] = useState({
    nombreNodo: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);

  /**
   * Maneja los cambios en los inputs del formulario.
   * 
   * @param {ChangeEvent<HTMLInputElement>} e - El evento de cambio del input.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value 
    }));
  };

   /**
   * Maneja el envío del formulario de inicio de sesión.
   * 
   * @param {FormEvent<HTMLFormElement>} e - El evento de envío del formulario.
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(formData); 
    const apiUrl = `http://127.0.0.1:5000/verificacion_nodo?nombre=${formData.nombreNodo}&password=${formData.password}`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        const result: NodeID = await response.json();
        console.log(result.id)
        saveNodeIndex(result.id)
      } catch (error: any) {
        setError(error.message);
        console.log(error);
      } 
    };

    fetchData();
  };

 
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre Nodo</label>
          <input
            type="text"
            className="form-control"
            id="nombreNodo"
            value={formData.nombreNodo}
            onChange={handleChange} 
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleChange} 
          />
        </div>
        <p><a href="/sign-up" className="link-offset-1">Si tu nodo no esta registrado, haslo</a></p>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Sign_in;
