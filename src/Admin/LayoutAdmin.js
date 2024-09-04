import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {

    return (
        <div>
            <header>
                Admin
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutAdmin