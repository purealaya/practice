const mongoose = require('mongoose');

// Create property schema
const OwnerSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
}, {timestapms: true});

module.exports = mongoose.model('Owner', OwnerSchema);



