const express = require('express'),
    router = express.Router();

const link = '/users';

router.get(link, (req, res) => {
    // analysis.get(req.query).
    //     then(result => res.send(result))
    //     .catch(error => res.status(501).send(error));
});

module.exports = router;