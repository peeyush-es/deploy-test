const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(express.json());

app.get('/api', (req, res) => {
  res.json('{}');

   //#res.sendStatus(200)
});

app.post('/api', (req, res) => {
  const requestBody = req.body;

  // Do something with the JSON data
  //console.log(requestBody);

  //#res.sendStatus(200);
    res.json(requestBody);

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

