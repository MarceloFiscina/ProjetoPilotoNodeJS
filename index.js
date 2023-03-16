'use strict'; // https://igluonline.com/o-que-o-use-strict-faz-no-javascript-e-por-que-ele-existe/

// Carrega as bibliotecas necessárias
const express = require('express'); // https://expressjs.com/
const helmet = require('helmet'); // https://www.npmjs.com/package/helmet
const compression = require('compression'); // https://www.npmjs.com/package/compression
const ejs = require('ejs'); // https://ejs.co/
const path = require('path'); // https://nodejs.org/api/path.html
const crypto = require('crypto'); // https://nodejs.org/api/crypto.html
const websocket = require('./middlewares/websocket');

// Criar o webserver
const app = express();
const port = 3000;

// Usa o modulo de segurança helmet
app.use((req, res, next) => {
    // Cria uma hash para evitar ataques de repetição
    //  https://content-security-policy.com/nonce/
    // https://www.ibm.com/docs/pt-br/was-nd/8.5.5?topic=services-nonce-randomly-generated-token
    res.locals.nonce = crypto.createHash('md5').update((new Date().getTime().toString())).digest('base64');
    next();
});
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'data:', 'https:', (req, res) => `'nonce-${res.locals.nonce}'`, "'strict-dynamic'"],
            styleSrc: ["'self'", 'data:', 'https:', "'unsafe-inline'", "'strict-dynamic'"],
            imgSrc: ["'self'", 'data:', 'https:', "'unsafe-inline'", "'strict-dynamic'"],
            connectSrc: ["'self'", 'https:'],
        },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: {
        policy: "cross-origin",
    }
}));

// Modulo de compressão
app.use(compression());

// Arquivos estáticos (css, js, imagens, etc) - https://expressjs.com/pt-br/starter/static-files.html
app.use(express.static('public'));

// Define o diretório de templates e configura o EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', (path, data, cb) => {

    // Configurações do EJS
    let ejsOptions = {
        openDelimiter: '{{',
        closeDelimiter: '}}',
        cache: false
    }

    ejs.renderFile(path, data, ejsOptions, cb);
});

// Rota inicial
app.use(require('./routes/home'))

// Rota Render
app.use(require('./routes/render'))

// Rota Render
app.use(require('./routes/websocket'))

// API
app.use(require('./routes/api'))

// Rota 404
app.use(require('./routes/404'))


// Inicializa o webserver
const server = app.listen(port, () => {
    let host = server.address().address;
    console.log(`Webserver => ${host}:${port}/`);
});

// Servidor websocket
websocket(server);
