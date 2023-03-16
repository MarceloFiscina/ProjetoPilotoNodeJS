const WebSocket = require('ws'); // https://github.com/websockets/ws/blob/HEAD/doc/ws.md

module.exports = (server) => {

    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        //console.log('Nova conexão WebSocket');

        ws.on('message', (message) => {
            //console.log('Mensagem recebida:', message.toString());

            // Envie uma mensagem de volta ao cliente
            //ws.send(`Você disse: "${message}"`);

            for (const client of wss.clients) {
                client.send(message.toString());
            }
        });

        ws.on('error', (e) => {
            console.log(e);
        });

        ws.on('close', () => {
            //console.log('Conexão WebSocket fechada');
        });
    });

};