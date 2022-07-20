import express from 'express';

import Product from '../models/productModel.js';
import User from '../models/userModel.js';

import data from '../data.js';


//make the apis in the backend project modular
const seedRouter = express.Router();


seedRouter.get('/', async (req,res) => {
    //remove all previous records in the product model
    await Product.remove({});
    //create new products
    const createdProducts = await Product.insertMany(data.products);

    await User.remove({});
    const createdUsers = await User.insertMany(data.users);

    
    //send createdProducts to the frontend
    res.send({createdProducts, createdUsers});
})

export default seedRouter;