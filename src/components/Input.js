import React, { useEffect, useState } from 'react'
import Button from './Button'
import TextComp from './TextComp'

const Input = ({ initialValue, firstName }) => {

    const [counter, setCounter] = useState(initialValue)
    const [list_items, setListItems] = useState([])
    const [exist, setExist] = useState(false)

    // Hooks
    //Mounted

    //When the array of dependencies is empty
    //IS like we are saying : useEffect function 
    // should execute at the mounting phase of the component
    useEffect(() => {
        console.log('Input has been mounted')
    }, [])
    //array of dependencies

    //Updated
    useEffect(() => {
        console.log(counter, 'Has been updated')
    }, [counter, list_items, exist])

    //Unmounted
    useEffect(() => {

        //cleanup
        return () => {
            console.log("Unmounted")
        }
    }, [])


    useEffect(() => {
        //This useeffect triggers at any subsequent change
    })

    const handleChange = () => {
        //Bunch of actions
    }
    //LOGIC => setListItems(data) setExist(true)

    //return statement
    return (
        <div className='input'>
            <TextComp text={"Counter feature 1"} />
            <h1>{firstName}</h1>
            <input type='text' value={initialValue} onChange={handleChange} />
            <Button counter={counter} setCounter={setCounter} />
            <h2>The counter value : {counter}</h2>
        </div>
    )
    //JSX
}

export default Input