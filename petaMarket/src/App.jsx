
import {Routes,Route} from 'react-router-dom'
import Register from './features/User/pages/register'
import Login from './features/User/pages/login'


function App() {

  return (
    <Routes>
      <Route path='user' >
        <Route path="register" element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>

    </Routes>
  )
}

export default App
