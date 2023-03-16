
// Função para retornar os valores lidos da API /api/servidor_status
const server_info = () => {
    try {

        // Trabalhando com a função fetch - https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
        // o uso do then e/ou catch é referente a Promise - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
        fetch('/api/servidor_status').then(async (result) => {

            // Aguarda o resultado ser convertido pra json
            // o uso do await é referente a uma função assíncrona - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await
            let dados = await result.json();

            for (let key of Object.keys(dados)) {
                let item = document.createElement('li');
                item.className = 'collection-item';
                item.innerText = `${key}:${JSON.stringify(dados[key])}`;
                document.getElementById('server_info').append(item);
            }
            // Exibe os dados
            console.log(dados);
        });
    } catch (e) {
        console.log(e);
    }
}

// Executa a função server_info
server_info();