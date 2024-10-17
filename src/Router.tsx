import { Routes, Route } from 'react-router-dom'
import { Cashier } from './Pages/Cashier'


const AppRouter = () =>{
    return(
        <Routes>
            <Route path='/' element={<Cashier/>}/>
        </Routes>
    )
}
export default AppRouter
