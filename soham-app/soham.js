const express = require('express');
const app = express();
const port = 9002;

app.get('/', (req, res) => {
  res.send('Welcome to Soham website!');
});

app.listen(port, () => {
  console.log(`Soham app listening on port ${port}`);
});
