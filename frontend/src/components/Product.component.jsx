//react
import React, { useContext } from 'react';
//context
import { Store } from '../Store';
//react-router-dom
import { Link } from 'react-router-dom';
//axios
import axios from 'axios';
//components
import Rating from './Rating.component';
//react-bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Product({product}) {

    // 1. unwrap the context
    const { state, dispatch: dispatchContext } = useContext(Store);
    // 2. unwrap the state
    const {
        cart: {
        cartItems, //type: []
        },
    } = state;

    const addToCartHandler = async (item) => {
        //  determine if item already exists in cart
        const existingItem = cartItems.find((x) => x._id === product._id);
        //  if so, then increase current quantity by one, else set to one
        const quantity = existingItem ? existingItem.quantity + 1 : 1;

        const { data } = await axios.get(`/api/products/${item._id}`);
    
        if (data.countInStock < quantity) {
          window.alert("We have not enought minerals");
          return;
        }
    
        dispatchContext({
          type: 'CART_ADD_ITEM',
          payload: {...item, quantity},
        })
      };

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

                {
                    product.countInStock === 0 ? (
                        <Button variant="light" disabled>Out of Stock</Button>
                    ) : (
                        <Button onClick={ () => addToCartHandler(product)}>Add to cart</Button>
                    )
                }
            </Card.Body>
        </Card>
    )
}
export default Product;