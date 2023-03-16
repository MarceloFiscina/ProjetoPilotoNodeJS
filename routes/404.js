const router = require('express').Router();

router.all('*', (req, res) => {
    try {
        res.status(404).render('404');
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;