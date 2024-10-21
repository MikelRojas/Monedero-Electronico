import { Routes, Route } from 'react-router-dom';
import Cashier from './Pages/Cashier';
import Recharge from './Pages/Recharge';
import Inventory from './Pages/Inventory';
import RouterLayout from './common/RouterLayout' ;
import Sign_in from './Pages/Sign-in';
import Sign_up from './Pages/Sign-up';
import { useEffect, useState } from "react";
import { getNodeIndex } from './store/index';



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
