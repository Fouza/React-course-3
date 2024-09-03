import React from 'react'

const Button = ({ counter, setCounter }) => {

    return (
        <button
            onClick={() => { setCounter(counter + 1) }}>
            Increment
        </button>
    )
}

export default Button