//react
import React from 'react';
//react-router-dom
import { Link, useLocation } from 'react-router-dom';
//react-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//react-helmet-async
import { Helmet } from 'react-helmet-async';



export default function SignInScreen() {

    const { search } = useLocation;
    const redirectUrlParam = new URLSearchParams(search).get('redirect');
    console.log("redirectUrlParam: ", redirectUrlParam);
    const redirect = redirectUrlParam ? redirectUrlParam : "/";


    return (
        <Container className="small-container">
            
            <Helmet>
                <title>Sign In</title>
            </Helmet>

            <h1 className="my-3">Sign In</h1>

            <Form>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
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