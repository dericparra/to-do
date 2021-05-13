import React from 'react'
import { Link } from 'react-router-dom'

import { AreaHeader } from './styles'

function Header() {
  return (
    <AreaHeader>
      <div className="container">
        <div className="logo"></div>
        <div className="logout">
          {' '}
          <Link to="/" className="link">
            Sair
          </Link>
        </div>
      </div>
    </AreaHeader>
  )
}

export default Header
