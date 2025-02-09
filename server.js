// Steps to run this project:
// 1. Open Mongo Atlas , connect to DB001 , then paste the connection string to MongoDB Compass while editing the password
// 2. Open the terminal , run 'npm run dev' , check if database is connected
// 3. Open Postman or Thundeclient,port_id:http://localhost:5002/api/users/login, create a new login request (POST) for jwt token , "email":"polo@gmail.com", "password":"123456"
// 4. Copy the token and paste it in Auth -> Bearer Token -> Paste the token , send GET request to http://localhost:5002/api/users/current , you will get the user details
// 5. Then after this you can start CRUD operation on the contacts DB in MongoDB, see the body format for CRUD in ContactController.js
// 6. You can also run the CRUD operation on the users DB in MongoDB, see the body format for CRUD in UserController.js
const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');

connectDB();
const app = express();
// this will be our configuration for the PORT in .env file on which to run , else run on 5001



const port =process.env.PORT || 5001;

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

 app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
