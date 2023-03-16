// Exemplo de envio de dados do controller 
const showdown = require('showdown'); // https://showdownjs.com/
const fs = require('fs'); // https://nodejs.org/api/fs.html

// Essa função converte o README.md para HTML
const home = () => {
    try {
        const converter = new showdown.Converter();
        const text = fs.readFileSync('README.md', { encoding: 'utf-8' });
        const html = converter.makeHtml(text);
        return html
    } catch (e) {
        console.log(e);
    }
}

// Exporta a função
module.exports = home