import React from 'react'
import { AreaHeader } from './styles'

function Header() {
  return (
    <AreaHeader>
      <div className="container">
        <div className="logo"></div>
        <div className="logout">Sair</div>
      </div>
    </AreaHeader>
  )
}

export default Header
