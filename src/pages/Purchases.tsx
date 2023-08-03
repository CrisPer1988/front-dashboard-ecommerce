import { useState } from "react"
import "./styles/purchases.css"

const Purchases: React.FC = () => {
  // Estado para almacenar los productos agregados al carrito
  const [carrito, setCarrito] = useState<number[]> ([]);
  const productosDisponibles = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripcion del producto', precio: 29.99 },
    //Agregar + productos aqui...
  ];


// Función para agregar un producto al carrito
const agregarAlCarrito = (idProducto: number ) => {
    setCarrito([...carrito, idProducto ]);

};

// Calcular el total de la compra
const calcularTotal = () => {
    return carrito.reduce((total, idProducto) => {
      const producto = productosDisponibles.find((p) => p.id === idProducto)
      return total + (producto ? producto.precio : 0 );
  }, 0);
};

  return (
    <div>
    <h1>Productos Disponibles</h1>
    <div className="productos">
      {productosDisponibles.map((producto) => (
        <div key={producto.id} className="producto">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <button onClick={() => agregarAlCarrito(producto.id)}>Agregar al Carrito</button>
        </div>
      ))}
    </div>


    <h2>Carrito de Compras</h2>
    <div className="carrito">
      <ul id="lista-carrito">
        { carrito.map((idProducto) => {
          const producto = productosDisponibles.find((p) => p.id === idProducto);
          return (
            producto && (
              <li key={producto.id}>
                {producto.nombre} - ${producto.precio}
              </li>
            )
          )
        })}
      </ul>
      <p>Total: <span id="total">{ calcularTotal().toFixed(2)}</span></p>
    </div>
    </div>
  )
}

export default Purchases