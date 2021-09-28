require('dotenv').config()
const { myAvatar } = require('./data.js');
const express= require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/avatar-characters', (req, res) => { 
    res.json(myAvatar)
});

app.get('/avatar-characters:id', (req, res) => {
    const mainCharacter = myAvatar.find(character => character.id === Number(req.params.id));
    res.json({mainCharacter});
    });

module.exports = { app };