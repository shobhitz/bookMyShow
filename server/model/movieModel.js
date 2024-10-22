const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {type:String, required: [true, "Movie Title is mandatory"]},
    description: {type:String, required: [true, "Description is mandatory"]},
    duration: {type:String, required: [true, "Duration is mandatory"]},
    genre: {type:String, required: [true, "Genre is mandatory"]},
    language: {type:String, required: [true, "Language is mandatory"]},
    releaseDate: {type:Date, required: [true, "Release Date is mandatory"]},
    poster: {type:String, required: [true, "Poster is mandatory"]},
    
}, {timestamps: true})

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie