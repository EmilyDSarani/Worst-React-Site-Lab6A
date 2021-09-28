require('dotenv').config()
const {myAvatar} = require('./data.js');
const express= require('express');
const app = express();

const port = 3000

port = process.env.PORT || 3000;

app.get('/avatar-characters', (req,res)=>{
    res.json(myAvatar)
});

app.get('/avatar-characters:id', (req,res) => {
     myAvatar.find(character => character.id === Number(req.params.id));
    res.json({myId:req.params.id});
    });