import React, { useEffect, useMemo } from 'react'
// import { useDispatch } from 'react-redux'
import { User, ShoppingCart, Heart } from 'react-feather'
import { Link } from 'react-router-dom'

import {Header, Logo, ListOptionsHeader} from './styles.js'

import ImageLogo from '../assets/logo.png'


const UserLayout = ({ children }) => {

  return (
    <>
      <Header id="user-header">
          <Link to="/">
            <Logo src={ImageLogo} alt="Photogram logo" />
          </Link>

        <nav>
          <ListOptionsHeader className="user options">
            <li id="user-option" className="header-option">
              <User />
            </li>
            <li className="header-option">
              <Link to="/cart">
                <ShoppingCart />
              </Link>
            </li>
          </ListOptionsHeader>
          </nav>
      </Header>
      {children}
    </>
  )
}

export default UserLayout
