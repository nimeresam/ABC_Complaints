const express = require('express'),
    router = express.Router();

const complaints = new (require('../managers/complaints.manager'))();

const link = '/complaints';

router.get(link, (req, res) => {
    complaints.get().
        then(result => res.send(result))
        .catch(error => res.status(501).send(error));
});

router.post(link, (req, res) => {
    complaints.create(req.body).
        then(result => res.send(result))
        .catch(error => res.status(501).send(error));
});

router.put(link, (req, res) => {
    complaints.update(req.body).
        then(result => res.send(result))
        .catch(error => res.status(501).send(error));
});

router.delete(`${link}/:id`, (req, res) => {
    complaints.delete(req.params.id).
        then(result => res.send(result))
        .catch(error => res.status(501).send(error));
});

module.exports = router;