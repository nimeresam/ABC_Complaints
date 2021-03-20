const express = require('express'),
    router = express.Router();

const users = new (require('../managers/users.manager'))();
const { createToken } = require('../auth');

router.post('/login/:role', (req, res) => {
    let { body } = req;
    let role = req.params.role;
    users.login(body)
        .then(user => {
            let token = createToken({ username: user.name, role });
            res.send({ token, user });
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.post('/register/:role', (req, res) => {
    let { body } = req;
    let role = req.params.role;
    users.register(body, role)
        .then(user => {
            let token = createToken({ username: user.name, role });
            res.send({ token, user });
        })
        .catch(err => {
            res.status(406).send(err);
        });
});

module.exports = router;