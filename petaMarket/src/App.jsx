
import {Routes,Route} from 'react-router-dom'
import Register from './features/User/pages/register'
import Login from './features/User/pages/login'
import Dashboard from './features/Dashboard/pages/dashboard'
import Header from './common/header'
import PostProduct from './features/Seller/pages/postProduct'
import Home from './features/Dashboard/pages/home'
function App() {

  return (
    <Routes>
      <Route path='' element={<>
          <Header />
          <Dashboard /> 
        </>} />
      <Route path='user' >
        <Route path="register" element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='seller' >
            <Route path='post' element={<PostProduct />} />
        </Route>
        <Route path='home' element={<Home />}/>
    </Routes>
  )
}

export default App
