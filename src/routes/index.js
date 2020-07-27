const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/contact', (req, res) => {
    res.render('contacto');
});

module.exports = router;