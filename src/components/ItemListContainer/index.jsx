import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {name} = useParams()


    if (name){
       useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProductos(data.filter((producto) => producto.category == name)))
       }, [name])
       
    } else {
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProductos(data))
        },[name])
    
            
    }

  return (


    <div className="container">
        {
            productos.map((producto) => (
                <Link to={`/item/${producto.id}`}>
                <div >
                    
                    <img src={producto.image} alt="" />
                    <h1>{producto.title}</h1>
                    <h2>{producto.description}</h2>
                    <p>{producto.price}</p>
                    <button>Agregar Al Carrito</button>
                    </div>
                
                </Link>
            ))
        }
    </div>
  )
}

export default ItemListContainer