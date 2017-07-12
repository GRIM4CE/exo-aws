const express = require('express');

const app = express();
const router = require('./routes');
const port = process.env.PORT || 3000;


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use('/', express.static('dist'));
app.use('/', router);
app.listen(port, () => console.log(`Connected to server on localhost: ${port}`));
