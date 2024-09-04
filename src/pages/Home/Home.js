import React, { Fragment, useEffect } from 'react'
import DataComp from '../../components/DataComp/DataComp'
import { CATEGORIES, PRODUCTS } from '../../data/data'
import Product from '../../components/Product/Product'


const Home = () => {
    console.log(PRODUCTS)

    useEffect(() => {
        const mapped_data = new Map()
        CATEGORIES.forEach(category => {
            mapped_data.set(category, PRODUCTS.filter(p => p.category_id === category.id))
        })
        console.log(mapped_data)
    })
    return (
        <div>
            <h2>Home page</h2>
            {/* <DataComp /> */}
            {/* {PRODUCTS.map(product => (
                <Product key={product.name} product={product} />
            ))} */}
            {CATEGORIES.map(category => (
                <Fragment>
                    <h1>{category.name}</h1>
                    {PRODUCTS.filter(product => product.category_id === category.id)
                        .map(product => (
                            <Product key={`${category.id}_${product.name}`} product={product} />
                        ))}
                </Fragment>
            ))}
        </div>
    )
}

export default Home