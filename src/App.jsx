import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (

    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}></Navigate>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/category/:name' element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
    </div>
  )
  
}

export default App
