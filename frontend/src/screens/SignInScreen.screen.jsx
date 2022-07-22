//react
import React, { useContext, useEffect, useState } from 'react';
//react-router-dom
import { Link, useLocation, useNavigate } from 'react-router-dom';
//context
import { Store } from '../Store';
//react-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//react-helmet-async
import { Helmet } from 'react-helmet-async';
//axios
import Axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';



export default function SignInScreen() {
    
    const navigate = useNavigate();

    const { search } = useLocation();
    // console.log(search);

    const redirectUrlParam = new URLSearchParams(search).get('redirect');
    // console.log("redirectUrlParam: ", redirectUrlParam);

    const redirect = redirectUrlParam 
        ? redirectUrlParam 
        : "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //access context in store.js
    const { state, dispatch: dispatchContext} = useContext(Store);

    const submitHandler = async e => {
        e.preventDefault();

        try {
            //send AJAX request to backend, then save the information to the store and localStorage 
            const {data} = await Axios.post(
                '/api/users/signin', 
                {
                    email, 
                    password
                }
            );
            console.log("data: ", data);

            //dispatch appropriate action right after successfull login
            dispatchContext({type: 'USER_SIGNIN', payload: data})

            //use localStorage to ensure quality UX
            localStorage.setItem('userInfo', JSON.stringify(data));

            //redirect user to the redirect variable
            navigate(redirect || '/');
            
        }
        catch(err) {
            // pull error message from (backend) utils.js
            toast.error(getError(err));
        }
    }

    useEffect( () => {
        if (state.userInfo) {
            navigate(redirect)
        }
    },[navigate, redirect, state.userInfo])


    return (
        <Container className="small-container">
            
            <Helmet>
                <title>Sign In</title>
            </Helmet>

            <h1 className="my-3">Sign In</h1>

            <Form onSubmit={submitHandler}>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        onChange={ e => setEmail(e.target.value)}
                        required 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={ e => setPassword(e.target.value)}
                        required 
                    />
                </Form.Group>

                <div className="mb-1">
                    <Button variant="primary" type="submit">Sign In</Button>
                </div>
                <Form.Group className="mb-3">
                    <Form.Text className="text-muted">
                        All your base are belong to us.
                    </Form.Text>
                </Form.Group>

                <div className="mb-3">
                    New Customer?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create an account</Link>
                </div>

            </Form>
        </Container>
    )
}