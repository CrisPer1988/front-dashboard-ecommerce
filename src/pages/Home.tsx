import { BrowserRouter } from "react-router-dom"
import CreateProducts from "./CreateProducts"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import AllProducts from "./AllProducts"
import Dashboard from "./Dashboard"
import Purchases from "./Purchases"
import UsersRegister from "./UsersRegister"


const Home = () => {
  return (
    <BrowserRouter>
    
    <div className="main-layout">
      <nav>
      <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/home">PANEL</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/products">Crear producto</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/category">Mis Productos</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/purchases">Ver compras</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/users">Mis usuarios</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
                <Route path="products" element={<CreateProducts />}/>
                <Route path="category" element={<AllProducts />}/>
                <Route path="purchases" element={<Purchases />}/>
                <Route path="users" element={<UsersRegister />}/>
                <Route path="home" element={<Dashboard />}/>
                
                <Route path="*" element={<Navigate to="/home" replace />}/>
            </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Home