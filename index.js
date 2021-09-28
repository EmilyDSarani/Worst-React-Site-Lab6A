const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Yellow World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

