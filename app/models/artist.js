const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Created artist schema 
const artistSchema = new Schema({
    artist_name: {
        type: String,
        required: true,
        unique: true
    },
    account_id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    registration_date: {
        type: Date,
        default: Date.now
    },
    description: String,
    location: String,
    image: String,
    age: {
        type: Number,
        required: true
    }

})

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;