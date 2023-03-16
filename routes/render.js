const router = require('express').Router();

// Chama o arquivo api de controller
const dados = require('../controller/render');

// Cria uma rota com caminho
router.get('/render', (req, res) => {
    try {
        res.render('render', { dados_render: dados });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;