import React, { useState } from 'react'

const Form = () => {
    // States
    const [data, setData] = useState({
        firstName: '',
        age: null,
        email: ''
    })

    // A function that changes a state when an input is changed
    const handlechange = (name, event) => {
        const value = event.target.value
        const prevData = { ...data }
        //prevData = {firstName: '', age: null, email: ''}
        const obj = Object.assign(prevData, { [name]: value }) // {firstName: "Fouzi"}
        setData(obj)
    }

    console.log(Object.keys(data))

    return (
        <form>
            {/* I want an input text to fill the name */}
            <input type='text' name='firstName' placeholder='First Name' onChange={(event) => handlechange("firstName", event)} />
            {/* I want an input to fill the age */}
            <input type='number' name='age' placeholder='Age' onChange={(event) => handlechange("age", event)} />
            {/* An input to fill the email */}
            <input type='email' name='email' placeholder='Email' onChange={(event) => handlechange("email", event)} />

            {/* 
            I want you to display the real time values of the states in
            an unordered list here
             */}
            <ul>
                {/* ["firstName", "age", "email"] */}
                {Object.keys(data).map(key => (
                    <li>{data[key]}</li>
                ))}
                <li>{data.firstName}</li>
                <li>{data.age}</li>
                <li>{data.email}</li>

            </ul>
        </form>
    )
}

export default Form