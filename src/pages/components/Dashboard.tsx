import { useEffect } from "react"
import "./styles/dashboard.css"
import { getUsersThunk } from "../../store/slices/users.slice"
import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from "../../store/slices/products.slice"

const Dashboard = () => {
  const {users} = useSelector((state:any) => state)
  const {products} = useSelector((state:any) => state)
  const dispatch:any = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [])

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])
  
  console.log(users);
  console.log(products);
  

  return (
    <div>
    <h1>PANEL</h1>
    <div className="content__dashboard">
      <div className="card__dashboard card__dashboard1">
        <h2>Usuarios</h2>
        <h3>Resgistrados: {users?.results}</h3>
      </div>
      <div className="card__dashboard card__dashboard2">
        <h2>Mis Productos</h2>
        <h3>total: {products?.result}</h3>
      </div>
      <div className="card__dashboard card__dashboard3">
        <h2>Mis Ventas</h2>
        <h3>total: 0</h3>
      </div>
    </div>
    </div>
  )
}

export default Dashboard