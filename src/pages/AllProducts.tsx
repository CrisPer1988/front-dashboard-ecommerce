import { useEffect, useState } from "react"
import { getProductsThunk } from "../store/slices/products.slice"
import { useSelector } from "react-redux"
import "./styles/allProducts.css"

const CreateCategory = () => {
  const {products} = useSelector(state => state)
  const [productId, setProductId] = useState()

  useEffect(() => {
    getProductsThunk()
  }, [])
  
  console.log(products);
  console.log(productId);

  
  

  return (
    <div className="content__products">
      {
        products?.products.map(product => (
          <div className="card__product" key={product.id}>
            <h1>{product.name}</h1>
            <h2>Descripcion: {product.description}</h2>
            <h3>Marca: {product.brand}</h3>
            <h4>Precio: ${product.price}</h4>
            <h4>Stock: {product.stock}</h4>
            <button onClick={() => setProductId(product.id)}>Editar</button>
          </div>

      
        ))
      }

          {
            productId ? <h2>putooooooo</h2> : ""
          }
    </div>

  )
}

export default CreateCategory