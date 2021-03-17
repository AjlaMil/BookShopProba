import React from 'react'
import {Link} from  'react-router-dom'
import { Card } from 'react-bootstrap'
import products from '../products'

const Product = ({product}) => {
    return (
        <Card className = 'my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>   {/* Using Link to instead of a href in order to achieve single page application, instead of having refreshing*/}
                <Card.Img src={product.image} variant='top'/>
            </Link>

            <Card.Body>

            <Card.Text as ='div'>
                <div className='my-3'>
                    <strong>{product.writer}</strong>
                </div>
            </Card.Text>

             <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
             </Link>

             

            <Card.Text as ='div'>
                <div className='my-3'>
                    Genre: {product.genre}
                </div>
            </Card.Text>

            <Card.Text as ='h3'>${product.price}</Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product
