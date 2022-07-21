import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import data from './data.js';

import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';



dotenv.config(); // fetch variables (MONGODB_URI) from the .env file and accessed from process.env....

// MongoDB connect function - connect to the MongoDB database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to the database');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

//form data in post request will be converted to a JSON object inside record
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter)

//define a middleware-like error handler for express
//when userRoutes has an error, this will run
app.use( (err, req, res, next) => {
    res.status(500).send({message: err.message})
})

//define the port that we are going to respond for the backend
const port = process.env.PORT || 5000;

//start the server and be on standby to respond to the frontend
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
