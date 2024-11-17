const express = require('express');
const uuid = require('uuid');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

app.get('*', (_req, res) => {
    res.send({
        msg: 'It\'s working!'
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let users = {};

var apiRouter = express.Router();
app.use('/api', apiRouter);