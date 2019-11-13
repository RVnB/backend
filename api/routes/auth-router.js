const bcrypt = require('bcryptjs')

const router = require('express').Router();

const Users = require('../helpers/user-helper');

router.post('/sign-up', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            console.log('Error..', err);
            res.status(500).json(err);
        });
});

router.post('/sign-in', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.username = user.username;
                res.status(200).json({ message: `Logged in ${user.user_id}`});
            } else {
                res.status(401).json({ message: 'You must be signed in to do that!' })
            }
        })
        .catch(err => {
            console.log('Error...', err);
            res.status(500).json(err);
        });
});

module.exports = router;