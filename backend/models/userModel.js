import mongoose from 'mongoose';


//schema - two parameters: fields & options 
const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false, required: true}
    },
    {
        timestamps: true,
    }
);

//model
const User = mongoose.model('User', userSchema);

export default User;