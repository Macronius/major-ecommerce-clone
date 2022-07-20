import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

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

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);



//define the port that we are going to respond for the backend
const port = process.env.PORT || 5000;

//start the server and be on standby to respond to the frontend
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
