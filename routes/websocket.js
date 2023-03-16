const router = require('express').Router();
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const { send_data } = require('../controller/websocket');

let data = [];


setInterval(() => {
    data = [];
    for (let i = 0; i < 20; i++) {
        data.push(
            {
                x: new Date().getTime() - i * 1000,
                y: random(50, 60)
            }
        )
    }
}, 500);

setInterval(() => {
    send_data(JSON.stringify(data));
}, 1000);

// Cria uma rota com caminho
router.get('/websocket', (req, res) => {
    try {
        res.render('websocket');
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;