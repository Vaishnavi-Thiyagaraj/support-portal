var express = require('express');

const port = 3005;

var app = express();
app.use(express.static(__dirname + '/../dist'));



app.listen(3005, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up ${port} in your browser.`);
  }
});