import { useState, ChangeEvent, FormEvent } from 'react';

/**
 * Componente para el registro de un nuevo nodo.
 * Permite a los usuarios ingresar el nombre del nodo y la contraseña,
 * y envía los datos a una API para su registro.
 * 
 * @returns {JSX.Element} El componente de registro renderizado.
 * 
 * @example
 * <SignUp />
 */
const SignUp = () => {
  const [formData, setFormData] = useState({
    nombreNodo: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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
   * Maneja el envío del formulario de registro.
   * Envía los datos a la API y maneja la respuesta.
   * 
   * @param {FormEvent<HTMLFormElement>} e - El evento de envío del formulario.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = 'http://127.0.0.1:5000/registrar_nodo';
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error en la petición');
      }

      const result = await response.json();
      setSuccess(result.message); // Mensaje de éxito
      setError(null); // Resetea cualquier error previo
      setFormData({ nombreNodo: '', password: '' }); // Limpia el formulario

    } catch (error: any) {
      setError(error.message);
      setSuccess(null); // Resetea el mensaje de éxito
    }
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
            required
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
            required
          />
        </div>
        <p><a href="/" className="link-offset-1">Ya tengo cuenta</a></p>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default SignUp;