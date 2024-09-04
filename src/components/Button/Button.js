import React from 'react'
import './Button.scss'

const Button = ({ counter, setCounter }) => {

    return (
        <button
            className={`custom_btn btn fs-xxl `}
            onClick={() => { setCounter(counter + 1) }}>
            Increment
        </button>
    )
}

export default Button