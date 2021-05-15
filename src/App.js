import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Routes from './Routes'
import Login from './pages/Login'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoUrl
    }

    setUser(newUser)
  }

  if (user === null) {
    return <Login onReceiveGoogle={actionLoginDataGoogle} />
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
