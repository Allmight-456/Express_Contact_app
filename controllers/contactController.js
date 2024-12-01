const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//desc Get all contacts 
//@routes GET /api/contacts
//@access Public

// either we can use a Try catch block or we can use async-handler from express-async-handler to do same
const getContacts =asyncHandler( async (req, res) => {
    const contacts = await Contact.find({});          // this will get all the contacts from the database
    res.status(200).json( contacts);
} );

//description create new contacts 
//@routes POST /api/contacts
//@access Public

const createContacts  = asyncHandler(async (req, res) => {
    const { name, email, phone} = req.body;          // this will get the name, email and phone from the body of the request
    if (!name || !email || !phone) {                  // if any of the field is empty then it will return the error message
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    res.status(201).json({ message: 'Create new contact' });
});

//desc Get all contacts with ID
//@routes GET /api/contacts/:id
//@access Public

const getContacts_byID = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get all contacts by ID: ${req.params.id}` });
});

//desc Update all contacts 
//@routes PUT /api/contacts/:id
//@access Public

const updateContacts = asyncHandler(
    async (req, res) => {
        res.status(200).json({ message: `Update contact by ID : ${req.params.id}` });
    }
)

//desc Delete contacts by ID
//@routes Delete /api/contacts/:id
//@access Public

const deleteContacts = asyncHandler(
    async (req, res) => {
        res.status(200).json({ message: `Update contact by ID : ${req.params.id}` });
    }
)

module.exports = { 
    getContacts,
    createContacts,
    getContacts_byID,
    updateContacts,
    deleteContacts
 };
