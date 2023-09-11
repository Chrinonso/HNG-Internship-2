const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');


const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        validate: {
            validator: function(value) {
                // Use a regular expression to allow alphabetic characters and spaces
                return /^[A-Za-z\s]+$/.test(value);
            },
            message: 'Your name must contain only alphabetic characters',
        },
    },
});

// const PersonSchema = new mongoose.Schema({
//     name: {
//         type:String,
//         required:[true, 'please provide name'],
//         validate: {
//             validator:validator.isAlpha,
//             message: 'Your name must be an Alphabet',
//         },
//     },
// });

module.exports = mongoose.model('Person', PersonSchema);
