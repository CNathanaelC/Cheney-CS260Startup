const express = require('express');
const cors = require('cors');
const DB = require('./database.js');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.set('trust proxy', true);

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

app.post('/api/auth/create', async (req, res) => {
    try {
        console.log(`Creating user ${req.body.userName}`);
        if (await DB.userExists(req.body.userName)) {
            console.log('User already exists');
            res.status(409).json({ 'message': 'Existing user' });
        } else {
            const genToken = uuid.v4()
            const user = await DB.createUser(req.body.userName, req.body.password, genToken);
            console.log('User creation success');
            res.status(201).json({
                "message": 'User created successfully',
                "token": genToken
            })
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
});


app.post('/api/auth/login', async (req, res) => {
    try {
        console.log(`Logging in user ${req.body.userName}`);
        if (await DB.userExists(req.body.userName)) {
            const user = await DB.getUser(req.body.userName, req.body.password);
            console.log('User found');
            if (await bcrypt.compare(req.body.password, user.password)) {
                console.log('Password matches');
                res.status(201).json({ 'token': user.token })
            } else {
                console.log(`Incorrect Password for user ${user.userName}`);
                res.status(401).json({ 'message': 'Unauthorized' });
            }
        } else {
            console.log(`User ${req.body.userName} does not exist`);
            res.status(401).json({ 'message': 'Unauthorized' });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});