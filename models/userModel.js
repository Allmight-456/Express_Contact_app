const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:[ true, 'Please add a name']
    },
    email: {
        type: String,
        required: [ true, 'Please add a email'],
        unique: [ true, 'Email already exists']
    },
    password: {
        type: String,
        required: [ true, 'Please add a password'],
    }
});
module.exports = mongooose.model('User', userSchema);