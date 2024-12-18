const asyncHandler = require('express-async-handler');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//description register new user
//@routes POST /api/users/register
//@access Public

const registerUser  = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body;          // this will get the name, email and phone from the body of the request
    if (!name || !email || !password) {                  // if any of the field is empty then it will return the error message
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    //check if user is already registered
    const userAvailable = await Users.findOne({ email }); 
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }

    //hash the password when saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed PAssword is : ", hashedPassword);
    const user = await Users.create({
        name, 
        email,
        password: hashedPassword 
    });  // this will create a new contact with the name, email and phone

    console.log("User created: ", user);
    if(user){
        res.status(201).json({_id: user._id, name: user.name, email: user.email});
    }else {
        res.status(400);
        throw new Error('Invalid user data');
    }
    res.status(201).json({messgae: 'User registered successfully'});
});

//description create new contacts 
//@routes POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body; // Extract email and password from request
    if (!email || !password) { 
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    const user = await Users.findOne({ email });
    // Compare password and hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: { 
                email: user.email, 
                id: user._id, 
                name: user.name 
            }
        }, process.env.JWT_SECRET, {
            expiresIn: '15m'
        });
        res.status(200).json({ accessToken });
    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
});


//description Current User Information
//@routes POST /api/users/current
//@access Private 

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});


module.exports = {registerUser,loginUser,currentUser};