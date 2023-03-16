const router = require('express').Router();

// Chama o arquivo api do controller
const dados = require('../controller/api');

// Cria uma rota com caminho /api/dados que irá fornecer informações sobre o servidor
router.get('/api/dados', (req, res) => {
    try {
        res.json(dados());
    } catch (e) {
        console.log(e);
    }
});

// Cria uma rota com caminho /viaapi/
router.get('/viaapi/', (req, res) => {
    try {
        res.render('api');
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;