import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import TextComp from '../TextComp/TextComp'
import './Input.css'

const Input = ({ initialValue, firstName }) => {

    const [counter, setCounter] = useState(initialValue)
    const [list_items, setListItems] = useState(['test'])
    const [exist, setExist] = useState(true)

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
    // useEffect(() => {

    //     //cleanup
    //     return () => {
    //         console.log("Unmounted")
    //         alert("Are you sure you want to leave ?");
    //     }
    // }, [])


    // useEffect(() => {
    //     //This useeffect triggers at any subsequent change
    // })

    const handleChange = () => {
        //Bunch of actions
    }
    //LOGIC => setListItems(data) setExist(true)

    //return statement
    return (
        <div className='input input_class'>
            <TextComp title={"Counter feature 1"} className="black" />
            <TextComp title={"Testing CSS"} className="pink" />
            <h1>{firstName}</h1>
            <input type='text' value={initialValue} onChange={handleChange} />
            <Button counter={counter} setCounter={setCounter} />
            <h2>The counter value : {counter}</h2>
        </div>
    )
    //JSX
}

export default Input