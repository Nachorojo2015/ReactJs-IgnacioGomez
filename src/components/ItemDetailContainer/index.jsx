import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const {id} = useParams()

  useEffect(() => {
    fetch(` https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => setProducto(data))
  }, [id])
  

  return (
    <div className='container-item'>
       <img src={producto.image} alt="" />
       <h1>{producto.title}</h1>
       <h2>{producto.description}</h2>
       <h3>{producto.price}</h3>
       <button>Agregar Al Carrito</button>
    </div>
  )
}

export default ItemDetailContainer