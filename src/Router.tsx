import { Routes, Route } from 'react-router-dom';
import Cashier from './Pages/Cashier';
import Recharge from './Pages/Recharge';
import Inventory from './Pages/Inventory';
import RouterLayout from './common/RouterLayout' ;
import Sign_in from './Pages/Sign-in';
import Sign_up from './Pages/Sign-up';
import Discounts from './Pages/Discounts';
import { useEffect, useState } from "react";
import { getNodeIndex } from './store/index';


/**
 * Componente de enrutador de la aplicación.
 *
 * Este componente maneja las rutas de la aplicación y determina si
 * se debe mostrar la interfaz de usuario de inicio de sesión o las 
 * páginas principales basadas en el estado de inicio de sesión.
 *
 * Utiliza `getNodeIndex` para verificar si el usuario está autenticado.
 * Si está autenticado, renderiza las rutas principales. De lo contrario,
 * renderiza las rutas de inicio de sesión y registro.
 *
 * @returns {JSX.Element} El enrutador de la aplicación con rutas configuradas.
 */
const AppRouter = () =>{
    const [login ,setLogin] = useState<boolean>(false);
    useEffect(() => {
      if (getNodeIndex()){
        setLogin(true)
      }
    },[]);
    return (
        <Routes>
          {login ? (
            <Route path='/' element={<RouterLayout />}>
              <Route path='/' element={<Cashier />} />
              <Route path='/recharge' element={<Recharge />} />
              <Route path='/inventory' element={<Inventory />} />
              <Route path='/discounts' element={<Discounts />} />
            </Route>
          ) : (
            <>
              <Route path='/' element={<Sign_in />} />
              <Route path='/sign-up' element={<Sign_up />} />
            </>
          )}
        </Routes>
      );
}
export default AppRouter
