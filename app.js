const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000; // || 3000
app.use(express.static(__dirname + '/public'));
app.use('/images', express.static('images'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));
const router = require('./routes/router');
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));