const express = require('express');

module.exports = (userData) => {
    const router = express.Router();
    router.route('/')
        .get((request, response) => {
            userData.all()
                .subscribe(
                users => response.status(200).json(users),
                err => response.status(500).json(err));
        });

    return router;
}