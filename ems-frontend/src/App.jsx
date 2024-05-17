import React from 'react'
import ListPasswordsComponent from './components/ListPasswordsComponent'
import HeaderComponent from './components/HeaderComponent'
import './style/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PasswordComponent from './components/PasswordComponent'
import ContactComponent from './components/ContactComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element = { <ListPasswordsComponent/>}></Route>
            <Route path='/add-password' element = { <PasswordComponent/>}></Route>
            <Route path='/contacts' element = { <ContactComponent/>}></Route>
            <Route path='/edit-pass/:id' element = {<PasswordComponent />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App