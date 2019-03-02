const express = require('express');
const request = require('request');

const app = express();

app.use(express.static(`${__dirname}/app`));

app.get('/greeting', (req, res) => {
    res.json({message: 'Hello from server'});
});

app.get('/todos', (req, res) => {
    console.log('Getting Todos..');
    let userId = req.query.userId;
    request({
        url: 'https://jsonplaceholder.typicode.com/todos',
        qs: {userId}
    }, (err, resp, body) => {
        res.json(body);
    });
});

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/app/index.html`);
});

app.listen(3000);
console.log('Server running on port 3000');
