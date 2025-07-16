import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login  } from './pages/Login'
import { Register } from './pages/Register'
import ParticlesBackground from './components/ParticlesBackground'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

function App() {

  return (
    <>
      <ParticlesBackground />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
