# GuiaPerguntas

GuiaPerguntas é uma aplicação web simples para fazer e responder perguntas. Este projeto foi desenvolvido utilizando Node.js, Express.js e Sequelize ORM.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes tecnologias instaladas em sua máquina:

- Node.js: [Download Node.js](https://nodejs.org/)
- PostgreSQL: [Download PostgreSQL](https://www.postgresql.org/)

## Instalação

1. Clone este repositório:

git clone https://github.com/jaderccesar/GuiaPerguntas.git


2. Navegue até o diretório do projeto:

   cd GuiaPerguntas

   
3. Instale as dependências:

npm install


4. Configure o banco de dados PostgreSQL de acordo com as configurações em `database.js`.

5. Execute as migrações do banco de dados:

npx sequelize-cli db:migrate

6. Inicie o servidor:

npm start

7. Acesse a aplicação em [http://localhost:1280/](http://localhost:1280/).

## Como Usar

- Na página inicial, você verá uma lista de perguntas. Você pode clicar em uma pergunta para ver detalhes e respostas ou clicar em "Perguntar" para criar uma nova pergunta.
- Na página de detalhes da pergunta, você pode ver a pergunta, suas respostas e fornecer sua própria resposta.

## Estrutura do Projeto

- `index.js`: Arquivo principal do servidor Express.
- `database/database.js`: Configuração da conexão com o banco de dados PostgreSQL.
- `database/Pergunta.js`: Definição do modelo de Pergunta.
- `database/Resposta.js`: Definição do modelo de Resposta.
- `views/`: Diretório contendo os arquivos de visualização em EJS.
- `public/`: Diretório para arquivos estáticos (CSS, imagens, etc.).

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
