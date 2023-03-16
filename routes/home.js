const router = require('express').Router();

// Chama o arquivo api de controller
const dados = require('../controller/home');

// Cria uma rota com caminho
router.get('/', (req, res) => {
    try {
        res.render('home', { home: dados() });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;