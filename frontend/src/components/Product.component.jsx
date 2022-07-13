//react
import React from 'react';
//react-router-dom
import { Link } from 'react-router-dom';
//react-bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//components
import Rating from './Rating.component';

function Product({product}) {

    return (
        <Card>
            <Link to={`/product/${product.slug}`}>
                <img className="card-img-top" src={product.image} alt={product.name} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>

                <Rating rating={product.rating} numReviews={product.numReviews} />

                <Card.Text>{product.price}</Card.Text>

                <Button>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}
export default Product;