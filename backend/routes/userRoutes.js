import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

import { generateToken } from '../utils.js';



const userRouter = express.Router();

//implement function to sign-in
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    //find user by email
    const user = await User.findOne({email: req.body.email});
    //if user exists, then at least one user by this email
    if (user) {
        //check encrypted password
        if (bcrypt.compareSync(req.body.password, user.password)) {
            //if user signin passes, then send user's data
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    //if email or password is incorrect
    res.status(401).send({message: 'Invalid email and/or password'});
  })
);

export default userRouter;