import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ToDo from './pages/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<ToDo />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
