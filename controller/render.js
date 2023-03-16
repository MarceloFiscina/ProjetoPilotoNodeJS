// Exemplo de envio de dados do controller 
// Cria um objeto (render) com as chaves que queremos imprimir no template render.ejs
const render = {
    title: "Envio de dados via Render - https://expressjs.com/pt-br/guide/using-template-engines.html",
    array: [1, 2, 3, 4, 5],
    object: {
        "chave1": "valor 1",
        "chave2": "valor 2",
        "chave3": "valor 3",
        "chave4": "valor 4",
        "chave5": "valor 5",
    }
}

// Exporta a função
module.exports = render