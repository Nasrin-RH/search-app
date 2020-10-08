const express = require('express');
const view = require('./view');
const app = express();
const cors = require('cors');

var corsOption = {
    Allow: '*'
};

app.use(cors(corsOption));

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/search/:search_text', view); 

app.listen(5000, () => console.log('Server @ 5000'));
