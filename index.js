const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(express.json());

app.post('/api', (req, res) => {
  const requestBody = req.body;

  // Do something with the JSON data
  console.log(requestBody);

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

