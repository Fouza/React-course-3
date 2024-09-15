import React, { Fragment, useEffect, useState } from 'react'
import DataComp from '../../components/DataComp/DataComp'
import { CATEGORIES, PRODUCTS } from '../../data/data'
import Product from '../../components/Product/Product'
import axios from 'axios'


const Home = () => {
    console.log(PRODUCTS)

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/api/products')
            .then(({ data }) => {
                console.log(data)
                if (data && data.success) {
                    setProducts(data.products)
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);


    return (
        <div>
            <h2>Home page</h2>
            {products && products.length > 0 ?
                products.map(item => <h2 key={item.name}>{item.name} - {item.price}</h2>)
                : <p>...Loading</p>
            }
        </div>
    )
}

export default Home



// useEffect(() => {
//     const mapped_data = new Map()
//     CATEGORIES.forEach(category => {
//         mapped_data.set(category, PRODUCTS.filter(p => p.category_id === category.id))
//     })
//     console.log(mapped_data)
// }, [])



{/* <DataComp /> */ }
{/* {PRODUCTS.map(product => (
                <Product key={product.name} product={product} />
            ))} */}
{/* {CATEGORIES.map(category => (
                <Fragment>
                    <h1>{category.name}</h1>
                    {PRODUCTS.filter(product => product.category_id === category.id)
                        .map(product => (
                            <Product key={`${category.id}_${product.name}`} product={product} />
                        ))}
                </Fragment>
            ))} */}