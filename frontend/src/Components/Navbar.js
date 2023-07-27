import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div>
        <div>
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
             <Link className='navbar-brand' to="/">
             <img src="https://labarberiainstitute.com/wp-content/themes/labarberia/_/img/enrollment-icon.png" alt="loading" height="50px"/>
             {""}
             Global Education network
             </Link>
             <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/" >Home</Link>

                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to ="/about">About</Link>

                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/course">Course</Link>

                    </li>

                </ul>

            </nav>
        </div>
    </div>
  )
}

export default Navbar

