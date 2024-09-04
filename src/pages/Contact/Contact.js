import React, { useState } from 'react'
import Button from '../../components/Button/Button'

const Contact = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Contact page</h1>
            <Button counter={counter} setCounter={setCounter} />

            <p>Counter : {counter}</p>
        </div>
    )
}

export default Contact