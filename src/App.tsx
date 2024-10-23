import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import './App.css'

/**
 * Componente principal de la aplicación.
 *
 * Este componente envuelve la aplicación con el `BrowserRouter`,
 * que proporciona funcionalidad de enrutamiento para la aplicación.
 *
 * @returns {JSX.Element} El componente de la aplicación.
 */
function App() {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
