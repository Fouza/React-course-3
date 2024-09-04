import React from 'react'

const Button = ({ counter, setCounter }) => {

    return (
        <button
            className='btn fs-xxl'
            onClick={() => { setCounter(counter + 1) }}>
            Increment
        </button>
    )
}

export default Button