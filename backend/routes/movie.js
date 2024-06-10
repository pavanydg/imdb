const express = require("express")
const {Movie} = require('../db')

const router = express.Router();

router.get('/movies',async (req,res) => {
    try{
        const movies = await Movie.find();
        res.status(200).json(movies)
    }catch(error){
        res.status(500).json({
            msg: error.message
        });
    }
})
router.get('/movies/:id',async (req,res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie)
    }catch(error){
        res.status(500).json({
            msg: error.message
        })
    }
})

module.exports = router;