const mongoose = require("mongoose")

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL);


const movieSchema = new mongoose.Schema({
    title: {type:String, required: true},
    short_description: String,
    full_description: String,
    rating:Number,
    image:{data:Buffer, contentType:String},
})

const Movie = mongoose.model('Movie',movieSchema);

module.exports = {Movie};
