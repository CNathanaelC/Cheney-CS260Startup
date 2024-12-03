const express = require('express');
const DB = require('./database.js');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.set('trust proxy', true);

var apiRouter = express.Router();

app.use(`/api`, apiRouter);

//more numbers to be added when more posts come
const comments = {
    1: [],
    2: [],
    3: []
};

app.post('/comments', (req, res) => {
    const { postId, text } = req.body;
    if (!comments[postId]) {
        comments[postId] = [];
    }
    comments[postId].push(text);
    res.json(comments[postId]);
});

app.get('/comments/:postId', (req, res) => {
    const { postId } = req.params;
    res.json(comments[postId] || []);
});

apiRouter.post('/auth/create', async (req, res) => {
    // await DB.clearAll()
    console.log(req.body.userName)
    console.log(req.body.password)
    if (DB.getUser(req.body.userName)) {
        console.log('fail')
        res.status(409).send({ msg: 'Existing user' });
    } else {
        console.log('success')
        const user = await DB.createUser(req.body.userName, req.body.password);
        setAuthCookie(res, user.token);
        res.send({
            token: user.token,
        });
    }
});

function setAuthCookie(res, authToken) {
    res.cookie('token', authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.post('/auth/login', async (req, res) => {
    const user = DB.getUser(req.body.userName, req.body.password);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ token: user.token });
            console.log('reached')
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});