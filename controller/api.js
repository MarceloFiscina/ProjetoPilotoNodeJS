const os = require('os'); // https://nodejs.org/api/os.html#os

const dados = () => {
    try {

        return {
            hostname: os.hostname(),
            machine: os.machine(),
            platform: os.platform(),
            loadavg: os.loadavg()
        };

    } catch (e) {
        console.log(e);
    }
}

module.exports = dados