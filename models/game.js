const mongoose = require('mongoose');

//schema
const GameSchema = mongoose.Schema({
    Rank : {
        type: Number,
        required: true
    },
    Name : {
        type: String,
        required : true
    },
    Platform : {
        type: String,
        required: true
    },
    Year : {
        type: Number,
        required: true
    },
    Genre : {
        type: String,
        required: true
    },
    Publisher : {
        type: String,
        required: true
    },
    Global_Sales : {
        type: Number,
        required: true
    },
    Date : {
        type: String,
        required: true
    }
});


//export the schema
const Game = module.exports=mongoose.model('Game', GameSchema);