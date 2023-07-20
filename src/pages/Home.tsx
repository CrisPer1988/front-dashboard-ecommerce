import { BrowserRouter } from "react-router-dom"
import CreateProducts from "./components/CreateProducts"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import CreateCategory from "./components/CreateCategory"
import Dashboard from "./components/Dashboard"
import Purchases from "./components/Purchases"
import UsersRegister from "./components/UsersRegister"


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
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/category">Crear categoria</NavLink>
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
                <Route path="category" element={<CreateCategory />}/>
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