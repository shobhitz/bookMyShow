const router = require('express').Router();
const movie = require("../model/movieModel");

router.post("/", async(req, res) => {
    try{
        //perform some sanitzation
        const {title} = req.body;
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.send({
            success: true,
            message: `${title} has been Added.`
        })
    }
    catch(err){
        res.send({
            success:false,
            message: err.message
        })
    }
})

router.get("/", async (req, res) => {
    try{
        const allMovies = await Movie.find();
        res.send({
            success: true,
            message: "All Movies have been fetched",
            data: allMovies
        })
    }catch(err){
        res.send({success: false, message: err.message})
    }
})

router.put("/:id", async(req,res) => {
    try{
        const id = req.params.id
        const data = req.body
        const movie = await Movie.findByIdAndUpdate(id, data, {new: true})
        res.send({success: true, message: "Movie Updated successfully", data: movie})
    }catch(err){
        res.send({success: false, message: err.message})
    }
})

router.delete("/:id", async(req,res) => {
    try{
        const id = req.params.id
        const movie = await Movie.findByIdAndDelete(id)
        res.send({success: true, message: "Movie Deleted Successfully"})
    }catch(err){
        res.send({success: false, message: err.message})
    }
})
// router.get("/:id", async(req,res) => {
//     try{
//         const id = req.params.id

//     }catch(err){
//         res.send({success: false, message: err.message})
//     }
// })

module.exports = router
