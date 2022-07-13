//react
import { useContext, useEffect, useReducer } from 'react';
//react-router-dom
import { useParams } from 'react-router-dom';
//axios
import axios from 'axios';
//react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
//react-helmet-async
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox.component';
import MessageBox from '../components/MessageBox.component';
//utility functions
import { getError } from '../utils';
import { Store } from '../Store';
//components
import Rating from '../components/Rating.component';


// javascript reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  //   console.log('params: ', params);
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    product: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [slug]);


  //  NOTE: by using context, we can have access to the state of the context and change the context
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart} = state;
  const addToCartHandler = async () => {

    //  determine if item already exists in cart
    const existingItem = cart.cartItems.find( x => x._id === product._id);
    //  if so, then increase current quantity by one, else set to one
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    // const quantity = existingItem  &&  existingItem.quantity + 1; 
    //QUESTION: why doesn't this work (return NaN)?

    const {data} = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry, this product is out of stock");
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM', 
      payload: {...product, quantity}
    });
  }

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
                <Helmet>
                    <title>{product.name}</title>
                </Helmet>
                <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>{product.price}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Out of Stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        onClick={addToCartHandler}
                      >
                        Add to Cart
                      </Button>
                      {/* NOTE: bc parent has className d-grid, button will take up full width */}
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ProductScreen;
