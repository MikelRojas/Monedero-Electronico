import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RouterLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}
export default RouterLayout
