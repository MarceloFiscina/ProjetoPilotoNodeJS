const WebSocket = require('ws');

const send_data = (msg) => {
    try {
        const wss = new WebSocket('ws://localhost:3000');

        wss.onerror = (e) => {
            console.log(`WS SD [ERROR]: ${e}`);
        }
        wss.onclose = (e) => {
            //console.log(`WS SD [CLOSE]: ${e}`);
        }
        wss.onopen = (e) => {
            //console.log(`WS SD [OPEN]: ${e}`);

            wss.send(msg);
            wss.close();
        }

    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    send_data
}