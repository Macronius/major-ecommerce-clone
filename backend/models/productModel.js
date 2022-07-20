import mongoose from 'mongoose';


//schema - two parameters: fields & options 
const productSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        countInStock: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        numReviews: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        timestamp: true
    }
);

//model
const Product = mongoose.model('Product', productSchema);

export default Product;