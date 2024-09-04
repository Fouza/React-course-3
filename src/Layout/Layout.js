import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = ({ }) => {

    return (
        <div>
            <nav className="navbar">
                <span className="company_name">CONQUEROR OF THE SUN</span>
                <ul className="links">
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/contact" className='link'>Contact</Link>
                </ul>
                <div className="sign_container">
                    <button className="sign">Sign Up</button>
                </div>
                <div className="side_menu_btn"><i className="fas fa-bars"></i></div>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout