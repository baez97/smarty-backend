const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Hello Smarty!')
})

app.listen(port, () => {
  console.log(`🚀 Smarty backend is up and running! Port > ${port}`);
})