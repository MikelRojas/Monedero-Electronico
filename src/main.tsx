import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.tsx'

/**
 * Punto de entrada de la aplicación.
 *
 * Este módulo crea el árbol de React en el elemento del DOM con el id 'root'.
 * Envuelve la aplicación en modo estricto para ayudar a identificar problemas
 * potenciales y mejorar la calidad del código.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
