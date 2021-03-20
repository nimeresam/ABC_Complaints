const express = require('express'),
    router = express.Router();

const users = new (require('../managers/users.manager'))();
const { createToken } = require('../auth');

router.post('/login', (req, res) => {
    let { body } = req;
    users.login(body)
        .then(user => {
            let token = createToken({ user_id: user.id, user_role: user.role });
            res.send({ token, user });
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.post('/register', (req, res) => {
    let { body } = req;
    users.register(body)
        .then(user => {
            let token = createToken({ user_id: user.id, user: user.role });
            res.send({ token, user });
        })
        .catch(err => {
            res.status(406).send(err);
        });
});

module.exports = router;