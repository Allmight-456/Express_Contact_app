//These contain the API now we need to create 
const express = require('express');
const router = express.Router();

const { getContacts, createContacts, getContacts_byID, updateContacts, deleteContacts } = require('../controllers/contactController');
const validateTokenHandler = require('../middleware/validateTokenHandler');

router.use(validateTokenHandler);
// router.route('/').get(getContacts);
// router.route('/').post(createContacts);
//or
router.route('/').get(getContacts).post(createContacts);

router.route('/:id').get(getContacts_byID).put(updateContacts).delete(deleteContacts);

module.exports = router;