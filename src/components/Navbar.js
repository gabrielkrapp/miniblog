import React from 'react'
import style from './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const Navbar = () => {
  const {user} = useAuthValue()
  const {logout} = useAuthentication()

  return (
    <nav>
      <NavLink to="/" className={({isActive}) => (isActive ? 'brand' : 'brand')}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className='links_list'>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({isActive}) => (isActive ? 'active' : '')}>
            Sobre
          </NavLink>
        </li>
        <li className='espaço'>
          |
        </li>
        {!user && (
          <>
            <li>
            <NavLink to="/login" className={({isActive}) => (isActive ? 'active' : '')}>
              Login
            </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({isActive}) => (isActive ? 'active' : '')}>
                Registre-se
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink to="/posts/create" className={({isActive}) => (isActive ? 'active' : '')}>
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({isActive}) => (isActive ? 'active' : '')}>
                Dashboard
              </NavLink>
            </li>
          </>
        )}

          {user && (
            <li>
              <button onClick={logout}>Sair</button>
            </li>
          )}

      </ul>
    </nav>
  )
}

export default Navbar