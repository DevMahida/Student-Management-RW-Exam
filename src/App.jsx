

import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home'
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
function App() {

  console.log("App");
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>

        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard/student' element={<Student/>}></Route>

      </Routes>
    </>
  )
}

export default App
