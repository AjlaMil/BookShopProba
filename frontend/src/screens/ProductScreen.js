import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import products from '../products'

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)

    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>
                Back
            </Link>
        
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name}/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>{product.genre}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>${product.price}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Description: {product.description}</h5>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock! :('}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroupItem>
                            <Button className = 'btn-block' type='button' disabled = {product.countInStock === 0}>
                            Add To Cart
                            </Button>
                        </ListGroupItem>

                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
