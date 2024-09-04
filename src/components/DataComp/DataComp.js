import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const DataComp = () => {

    const [data, setData] = useState()
    const [dataPost, setDataPost] = useState()
    const [dataPut, setDataPut] = useState()


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>
                setTimeout(() => {
                    setData(response.data)
                }, 5000)
            )
            .catch(error => console.error('Error:', error));
    }, []);

    console.log(data)
    //API is a set of endpoints
    //Each endpoint does a specific action (Inserting, creating, fetching)
    // Eg: Endpoint for fetching list of users
    // Eg: Endpoint for creating a new Order


    //Each endpoint is defined by the URL and the method
    //post
    //put
    //delete



    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(response => setDataPost(response.data))
            .catch(error => console.error('Error:', error));
    }, []);


    useEffect(() => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(response => setDataPut(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(() => setResponse('Deleted'))
            .catch(error => console.error('Error:', error));
    }, []);


    return (
        <Fragment>
            <p></p>
            <div></div>
        </Fragment>
    )
}

export default DataComp







// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error('Error:', error));
// }, []);