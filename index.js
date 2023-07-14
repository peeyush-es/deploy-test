const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/api', (req, res) => {
  res.send('Hello, World! 2');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

