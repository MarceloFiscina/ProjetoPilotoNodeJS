
## Introdução

Esse projeto tem como finalidade fazer uma breve introdução de alguns padrões e boas práticas no desenvolvimento em NodeJS.

## Documentações e Artigos

- #### NodeJS

  - <https://nodejs.org/docs/latest-v18.x/api/documentation.html>
  - <https://github.com/goldbergyoni/nodebestpractices/blob/master/README.brazilian-portuguese.md>
  - <https://danieldcs.com/boas-praticas-para-api-em-node-js/>
  - <https://www.luiztools.com.br/post/boas-praticas-de-arquitetura-com-nodejs-express/>

- #### ExpressJS

  - <https://expressjs.com/pt-br/4x/api.html>
  - <https://expressjs.com/pt-br/advanced/best-practice-performance.html>
  - <https://blog.bossabox.com/arquitetura-de-projeto-node-js-prova-de-balas/>
  - <https://dev.to/oieduardorabelo/10-melhores-praticas-para-aplicacoes-node-js-em-container-com-docker-2b0o>
  - <https://jesielviana.vercel.app/blog/best-practices-for-nodejs-api>

### Frameworks

> Um framework em desenvolvimento de software, é uma abstração que une códigos comuns entre vários projetos de software provendo uma funcionalidade genérica. Um framework pode atingir uma funcionalidade específica, por configuração, durante a programação de uma aplicação. Ao contrário das bibliotecas, é o framework quem dita o fluxo de controle da aplicação, chamado de Inversão de Controle.
<https://pt.wikipedia.org/wiki/Framework>

- #### CSS

  - Existem varios frameworks CSS, particularmente gosto do Materialize CSS, contudo deixarei uma breve lista abaixo que vale apena da uma olhada.
  - <https://materializeweb.com/>
  - <https://purecss.io/>
  - <https://getbootstrap.com/>
  - <https://semantic-ui.com/>
  - <https://tailwindcss.com/>

- #### Javascript (front-end)

  - <https://jquery.com/>

- #### Gráficos

  - <https://apexcharts.com/>
  - <https://www.chartjs.org/>

## Perfomance, Estilização e Segurança

Alguns links acima já dão uma noção de boas praticas, mas vamos aprofundar um pouco mais aqui.
Há diversas ferramentas para fazer essas analises. Citarei algumas e deixarei alguns artigos e tutoriais.

![Hello, friend.](https://c4.wallpaperflare.com/wallpaper/701/872/935/mr-robot-tv-series-hello-friend-elliot-mr-robot-hd-wallpaper-preview.jpg)

- ### Performance

  - [**Lighthouse (Google Chrome)**](https://developer.chrome.com/docs/lighthouse/overview/) - O Lighthouse é uma ferramenta automatizada de código aberto para melhorar o desempenho, a qualidade e a correção de seus aplicativos da web.
    Ao auditar uma página, o Lighthouse executa uma gama de testes na página e, em seguida, gera um relatório sobre o desempenho da página. A partir daqui, você pode usar os testes com falha como indicadores sobre o que pode fazer para melhorar seu aplicativo.

  - [**ApacheBench (ab)**](https://httpd.apache.org/docs/2.4/programs/ab.html) - O ApacheBench (ab) é uma solução gratuita que pode auxiliar na realização de testes de performance em aplicações Web. Um dos componentes do Apache HTTP Server, este utilitário de linha de comando pode ser empregado em cenários simulando múltiplos usuários concorrentes.

##### Artigos

- <https://blog.saninternet.com/google-lighthouse>
- <https://dev.to/jhonywalkeer/google-lighthouse-otimizando-suas-web-applicationswebsites-372m>
- <https://tiagotartari.medium.com/usando-apache-bench-para-teste-de-carga-e-an%C3%A1lise-de-performance-7dc92321de84>
- <https://www.infoq.com/br/articles/nodejs-utilizando-modulo-de-cluster/>

- ## Estilização

  - [**ESLint**](https://eslint.org/) - O ESLint analisa estaticamente seu código para encontrar problemas rapidamente. Ele é integrado à maioria dos editores de texto e você pode executar o ESLint como parte de seu pipeline de integração contínua.

  - [**Prettier**](https://prettier.io/) - Prettier é um formatador de código com suporte a diversos tipos de arquivos como JavaScript, JSX, Angular, Vue, TypeScript, HTML, CSS, SCSS e JSON.

##### Artigos

- <https://medium.com/jaguaribetech/melhorando-a-qualidade-do-seu-c%C3%B3digo-com-airbnb-style-guide-eslint-ba2979cabcaa>
- <https://blog.cod3r.com.br/organizacao-e-padronizacao-com-eslint/>
- <https://dev.to/alanfabricio/adicionando-o-prettier-ao-seu-projeto-javascripttypescript-226g>
- <https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code-pt>

- ## Segurança

  - [**Kali Linux**](https://www.kali.org/) - Kali Linux é uma distribuição Linux de código aberto baseada em Debian voltada para várias tarefas de segurança da informação, como Teste de penetração, Pesquisa de segurança, Computação forense e Engenharia reversa.

  - [**Jok3r**](https://www.jok3r-framework.com/) - Jok3r é uma estrutura que auxilia testadores de penetração para infraestrutura de rede e avaliações de segurança da web.

  - [**Snyk**](https://snyk.io/) - Encontre e corrija automaticamente vulnerabilidades em seu código, dependências de código aberto, contêineres e infraestrutura como código.

##### Artigos

- <https://expressjs.com/en/advanced/best-practice-security.html>

- <https://acervolima.com/node-js-protegendo-aplicativos-com-helmet-js/>

- <https://acervodigital.ufpr.br/bitstream/handle/1884/65693/R%20-%20D%20-%20DAVID%20NOVASKI%20NETO.pdf?sequence=1&isAllowed=y>

- <https://www.linkedin.com/pulse/12-ferramentas-de-seguran%C3%A7a-do-kali-paulo-oliveira/?originalSubdomain=pt>

- <https://pt.slideshare.net/edlaineuem/como-analisar-a-vulnerabilidade-de-uma-aplicao-web-com-o-kali-linux>

- <https://acervolima.com/kali-linux-ferramentas-de-analise-de-vulnerabilidade/>

- <https://www.alura.com.br/artigos/seguranca-detectando-bibliotecas-vulneraveis-com-snyk>

- <https://maximiliano-furtado.medium.com/detec%C3%A7%C3%A3o-de-vulnerabilidades-em-depend%C3%AAncias-node-js-8a1346573a6c>

- <https://www.hackingloops.com/how-to-perform-black-box-security-testing-with-jok3r-framework/>
