import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();    // fetch variables (MONGODB_URI) from the .env file and accessed from process.env....

// MongoDB connect function - connect to the MongoDB database
mongoose
    .connect(process.env.MONGODB_URI)
    .then( () => {
        console.log("connected to the database")
    })
    .catch(err => {
        console.log(err.message)
    })

const app = express();

app.get('/api/products', (request,response) => {
    response.send(data.products)
});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find( x => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({message: 'Product Not Found'});
    }
    res.send(data.products)
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find( x => x._id === req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({message: 'Product Not Found'});
    }
    res.send(data.products)
});

//define the port that we are going to respond for the backend
const port = process.env.PORT || 5000;

//start the server and be on standby to respond to the frontend
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})