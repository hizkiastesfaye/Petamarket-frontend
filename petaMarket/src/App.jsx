
import {Routes,Route} from 'react-router-dom'
import Register from './features/User/pages/register'
import Login from './features/User/pages/login'
import Dashboard from './features/Dashboard/pages/dashboard'
import Header from './common/header'
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
    </Routes>
  )
}

export default App
