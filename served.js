require('dotenv').config()
const {myAvatar} = requires('./data.js');
const express= require('express');
const app = express();


app.get('/avatar-characters', (req,res)=>{
    res.json(myAvatar)
});

app.get('/avatar-characters:id', (req,res) => {
    const matchingCharacter = myAvatar.find(character => character.id === Number(req.params.id));
    res.json({myId:req.params.id});
    });