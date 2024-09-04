import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = ({ }) => {

    return (
        <div>
            <nav class="navbar">
                <span class="company_name">CONQUEROR OF THE SUN</span>
                <ul class="links">
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/contact" className='link'>Contact</Link>
                </ul>
                <div class="sign_container">
                    <button class="sign">Sign Up</button>
                </div>
                <div class="side_menu_btn"><i class="fas fa-bars"></i></div>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout