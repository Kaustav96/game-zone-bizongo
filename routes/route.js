const express = require("express");
const router = express.Router();
const Game  = require('../models/game');

//APIS

//getting the data of games
router.get('/games',function(req,res,next){
    Game.find(function(err, games){
        res.json(games);
    });
});

//add game
router.post('/game', function(req,res,next){
    let newGame = new Game({
        Rank: req.body.Rank,
        Name: req.body.Name,
        Platform: req.body.Platform,
        Year: req.body.Year,
        Genre: req.body.Genre,
        Publisher: req.body.Publisher,
        Global_Sales: req.body.Global_Sales,
        Date: req.body.Date
    });
    //insert into db
    newGame.save(function(err, game){
        if(err){
            res.json({msg: 'Failed to add game'});
        }
        else
        {
            res.json({msg: 'Game added successfully'});
        }
    });
});

//delete game
router.delete('/game/:id',function(req,res){
    Game.deleteMany({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//whenever we create route, we need to export it
module.exports = router;