const express = require('express');
const uuid = require('uuid');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

let users = {};

var apiRouter = express.Router();

//more numbers to be added when more posts come
const comments = {
    1: [],
    2: [],
    3: []
};

app.post('/api/comments', (req, res) => {
    const { postId, text } = req.body;
    if (!comments[postId]) {
        comments[postId] = [];
    }
    comments[postId].push(text);
    res.json(comments[postId]);
});

app.get('/api/comments/:postId', (req, res) => {
    const { postId } = req.params;
    res.json(comments[postId] || []);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (username in users) {
        if (users[username].password === password) {
            const token = uuid.v4()
            res.json({ token });
        } else {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
    }
});

app.post('/api/auth/create', (req, res) => {
    const { username, password } = req.body;
    if (username in users) {
        return res.status(400).json({ msg: 'Account Exists' });
    } else {
        const token = uuid.v4()
        users.push({ username: username, password: password, token: token });
        res.json({ token });
    }
});