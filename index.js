const express = require('express')
const app = express()
const port = 3000

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Yellow World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

