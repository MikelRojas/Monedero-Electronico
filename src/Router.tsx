import { Routes, Route } from 'react-router-dom'
import Cashier from './Pages/Cashier'
import Recharge from './Pages/Recharge'
import Inventory from './Pages/Inventory'
import RouterLayout from './common/RouterLayout'


const AppRouter = () =>{
    return(
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/' element={<Cashier/>}/>
                <Route path='/recharge' element={<Recharge/>}/>
                <Route path='/inventory' element={<Inventory/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouter
