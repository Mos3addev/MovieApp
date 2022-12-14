import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({userData , logOut}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Noxe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {userData?
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
            <li className="nav-item">
              <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="tv">Tv</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="people">People</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="network">Networks</Link>
            </li>
          </ul>
          :''}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex text-white me-2">
              <a className="nav-link text-white" href='#'><i className='fab fa-facebook'></i></a>
              <a className="nav-link text-white" href='#'><i className='fab fa-spotify'></i></a>
              <a className="nav-link text-white" href='#'><i className='fab fa-instagram'></i></a>
              <a className="nav-link text-white" href='#'><i className='fab fa-youtube'></i></a>
            </li>
            {userData?
            <li className="nav-item">
              <div className='d-flex'>
                <Link className="nav-link text-white" to="profile">{userData.first_name}</Link>     
                <span onClick={logOut} className="nav-link text-white" to="logout">Logout</span>
              </div>

            </li>:<>
            <li className="nav-item">
              <Link className="nav-link text-white" to="login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="register">Register</Link>
            </li>
            </>
            }
          </ul>
          </div>
      </nav>
    </>
  )
}
