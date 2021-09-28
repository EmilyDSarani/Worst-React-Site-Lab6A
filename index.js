const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Yellow World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

