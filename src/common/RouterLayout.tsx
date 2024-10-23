import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

/**
 * Componente de diseño para la aplicación que incluye la barra de navegación.
 * Este componente utiliza <NavBar /> para mostrar la barra de navegación
 * y <Outlet /> para renderizar las rutas hijas definidas en el enrutador.
 * 
 * @returns {JSX.Element} El diseño de la aplicación que incluye la barra de navegación y las rutas hijas.
 * 
 */
const RouterLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RouterLayout;
