# ValeSulMovies

Atenção: a nomenclatura, logos e imagens utilizadas têm a única finalidade de demonstração de habilidades. Me comprometo a ocultar ou excluir estas informações a qualquer momento, caso solicitado pelo Vale Sul Shopping.

## Protipagem

Fiz uso do Figma para criar um layout base para Desktop (que também foi usado para Tablets) e smartphones. Link para visualização: https://www.figma.com/proto/mi9oby1clE82CzNSDDITQw/ValeSulMovies?node-id=1%3A2&scaling=scale-down


## FrontEnd

Fiz uso do ReactJS para construção da tela e dos componentes da página.

Para visualização e teste da aplicação, basta acessar a pasta "valesulmovies" usando o prompt de comando e digitar <code>
npm i</code> para a instalação das dependências.

Após este processo, digite <code>code . && npm start</code>. Assim você poderá visualizar meu código e a aplicação abrirá no navegador.

IMPORTANTE: a aplicação apenas funcionará com qualidade se o BackEnd também for iniciado. O processo descrito acima assume que a máquina possua o Node instalado com versão compatível. O comando <code>code .</code> assume que o usuário faça uso do Visual Studio Code. Você pode usar qualquer outro editor e abrir a pasta manualmente, se preferir.


## BackEnd

Fiz uso do PHP para desenvolvimento da API que recebe as requisições de busca por filmes.

Segue especificação do recurso.


### getMovies.php

    * Métodos aceitos: GET
    * Parâmetros aceitos: name (não obrigatório), year_publication (não obrigatório), genre (não obrigatório) e onlyFeatured (não obrigatório, deve ser "0" ou "1")
    * HTTP Status Codes: 200 (OK) quando a busca for bem sucedida e 400 (Bad Request) quando houver algum erro na requisição
    * Retorno (response): JSON contendo lista dos filmes encontrados contendo as propriedades id (string), name (string), description   (string), year_publication (string), genres (lista), image (string - URL para o arquivo) e featured (booleano)


### Erros

Em caso de erro na requisição, além do HTTP Status Code correspondente, a API retornará um objeto JSON com 2 propriedades ("errorCode" e "message").

Possíveis erros:
* InvalidRequestMethod: 400 - Bad Request, ocorrerá quando for feita requisição usando método HTTP não aceito pelo recurso.
