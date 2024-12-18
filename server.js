
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
