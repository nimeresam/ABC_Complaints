const express = require('express'),
    router = express.Router();

const users = new (require('../managers/users.manager'))();

const link = '/users';

router.get(`${link}/:id`, (req, res) => {
    users.get(req.params.id).
        then(result => res.send(result))
        .catch(error => res.status(501).send(error));
});

module.exports = router;