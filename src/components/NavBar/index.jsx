import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to={"/"}><img src="https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" alt="" /></Link>
        <Link to={'/'}><p>Home</p></Link>
        <Link to={"/category/men's clothing"}><p>Hombre</p></Link>
        <Link to={"/category/women's clothing"}><p>Mujer</p></Link>
        <Link to={"/category/electronics"}><p>Electronicos</p></Link>

    </nav>
  )
}

export default NavBar