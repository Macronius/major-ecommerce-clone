import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (request,response) => {
    response.send(data.products)
});

//define the port that we are going to respond for the backend
const port = process.env.PORT || 5000;

//start the server and be on standby to respond to the frontend
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})