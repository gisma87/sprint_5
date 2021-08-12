const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('./build/'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, function () {
  console.log(`Example app listening at http://localhost:${PORT}`);
});