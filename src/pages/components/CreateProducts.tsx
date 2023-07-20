import { useState } from 'react';
import Dropzone from 'react-dropzone';
import "./styles/createProduct.css"


const CreateProducts = () => {
  const [product, setProduct] = useState()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    busines_id: "",
    brand: "",
    product_imgUrl: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('stock', formData.stock);
    data.append('busines_id', formData.busines_id);
    data.append('brand', formData.brand);
    data.append('product_imgUrl', formData.product_imgUrl);

    const resetForm = () => {
      setFormData({
        name: '',
        description: '',
        price: '',
        stock: '',
        busines_id: '',
        brand: '',
        product_imgUrl: '',
      });
    };

    fetch('http://localhost:4100/api/v1/products', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(data => {
        setProduct(data) 
        resetForm();
      })
      .catch(error => console.log(error));
}

console.log(product);


const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });
  }

  const handleDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      product_imgUrl: acceptedFiles[0]
    });
  }

  return (
    <div>
    <h1>Crear Producto</h1>
    <form onSubmit={handleSubmit}>
      <div className="form__create-product">
      <label htmlFor="">Nombre</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="form__create-product">
      <label htmlFor="">Descripcion</label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </div>

      <div className="form__create-product">
      <label htmlFor="">Precio</label>
      <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </div>

      <div className="form__create-product">
      <label htmlFor="">Stock</label>
      <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
      </div>

      <div className="form__create-product">
      <label htmlFor="">Business_id</label>
      <input type="text" name="busines_id" value={formData.busines_id} onChange={handleChange} />
      </div>

      <div className="form__create-product">
      <label htmlFor="">Marca</label>
      <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
      </div>
     
     <div className="form__create-product">
      <label className='subir__img'>
      Subir imagen
        <Dropzone onDrop={handleDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              
            </div>
          )}
        </Dropzone>

      </label>
      </div>

      <button type="submit">CREAR</button>
      </form>
 
{
  product ? <div>
  <h2>Producto Creado "{product?.product.name}" 👌</h2>
</div>
: ""
}
     
      </div>
  )
}

export default CreateProducts