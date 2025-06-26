const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
  res.send('Welcome to Zaid website!');
});

app.listen(port, () => {
  console.log(`Zaid app listening on port ${port}`);
});
