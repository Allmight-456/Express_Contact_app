const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//desc Get all contacts 
//@routes GET /api/contacts
//@access Private

// either we can use a Try catch block or we can use async-handler from express-async-handler to do same
const getContacts =asyncHandler( async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});          // this will get all the contacts from the database
    res.status(200).json( contacts);
} );

//description create new contacts 
//@routes POST /api/contacts
//@access Private

const createContacts  = asyncHandler(async (req, res) => {
    const { name, email, phone} = req.body;          // this will get the name, email and phone from the body of the request
    if (!name || !email || !phone) {                  // if any of the field is empty then it will return the error message
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const contact = await Contact.create({ 
        name,
        email, 
        phone ,
        user_id: req.user.id });  // this will create a new contact with the name, email and phone
    res.status(201).json(contact);
});

//desc Get all contacts with ID
//@routes GET /api/contacts/:id
//@access Private

const getContacts_byID = asyncHandler(async (req, res) => {
    const getContacts = await Contact.findById(req.params.id);
    if (!getContacts) {
        res.status(404);
        throw new Error('Contact not found with matching ID');
    }
    res.status(200).json(getContacts);
});

//desc Update all contacts 
//@routes PUT /api/contacts/:id
//@access Private

const updateContacts = asyncHandler(
    async (req, res) => {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404);
            throw new Error('Contact not found with matching ID');
        }
        //check if the contact belongs to the user
        if(contact.user_id.toString() !== req.user.id){
            res.status(401);
            throw new Error('Not authorized to update this contact');
        }
        //if contact is found then update the contact with the new data
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
             req.body,
             { new: true, runValidators: true });
        res.status(200).json(updatedContact);
    }
)

//desc Delete contacts by ID
//@routes Delete /api/contacts/:id
//@access Private

const deleteContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found with matching ID');
    }
    //check if the contact belongs to the user
    if(contact.user_id.toString() !== req.user.id){
        res.status(401);
        throw new Error('Not authorized to delete this contact');
    }
    await Contact.deleteOne({ _id: req.params.id }); // Delete directly by ID  .remove() is no longer valig in mongoose
    res.status(200).json(contact); // Return the deleted contact details
});


module.exports = { 
    getContacts,
    createContacts,
    getContacts_byID,
    updateContacts,
    deleteContacts
 };
