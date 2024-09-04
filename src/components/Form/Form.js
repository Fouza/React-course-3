import React, { useState } from 'react'
import TextComp from '../TextComp/TextComp'

export const TestComp = () => {
    return (<h6>Test</h6>)
}

const Form = () => {
    // States
    const [data, setData] = useState({
        firstName: '',
        age: null,
        email: ''
    })

    const [firstName, setFirstName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()

    // A function that changes a state when an input is changed
    const handlechange = (name, event) => {
        const value = event.target.value
        const prevData = { ...data }
        //prevData = {firstName: '', age: null, email: ''}
        const obj = Object.assign(prevData, { [name]: value }) // {firstName: "Fouzi"}
        setData(obj)
    }

    const handleChangeV2 = (name, event) => {
        switch (name) {
            case 'firstName':
                setFirstName(event.target.value)
            case 'age':
                setAge(event.target.value)
            case 'email':
                setEmail(event.target.value)
        }
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

            <TestComp />
            {/* 
            I want you to display the real time values of the states in
            an unordered list here
             */}
            <ul>
                {/* ["firstName", "age", "email"] */}
                {Object.keys(data).map((key, index) => (
                    <TextComp key={`list1_ ${index}`} title={data[key]} />
                ))}

            </ul>

            <ul>
                {/* ["firstName", "age", "email"] */}
                {Object.keys(data).map((key, index) => (
                    <TextComp key={`list2_${index}`} title={data[key]} />
                ))}

            </ul>
        </form>
    )
}

export default Form