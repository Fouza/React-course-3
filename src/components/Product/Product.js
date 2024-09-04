import React from 'react'

const Product = ({ product }) => {

    const { name, price, category_id, images } = product

    return (
        <div className='card'>
            <div className='card-hdr'>
                {images && images.length > 0 && <img src={`../../assets/${images[0]}`} />}
                {/* {images.map(img => (
                    <img src={`../../assets/${img}`} />
                ))} */}
            </div>
            <div className='card-body'>
                <h2>{name}</h2>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Product