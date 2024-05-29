# Projeto CRUD fullstack

## Descrição do Projeto

Este projeto consiste em um sistema de CRUD de usuários, onde é possível visualizar 
todos os usuários cadastrados na base de dados, editar suas informações conforme necessário, 
excluir usuários existentes e cadastrar novos usuários.

## Dependências

### API (Backend)

- **express**: Framework Node.js para construção de aplicativos web.
- **mysql**: Driver Node.js para MySQL, utilizado para comunicação com o banco de dados.
- **cors**: Middleware express para habilitar o CORS (Cross-Origin Resource Sharing).
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor sempre que houver alterações no código.

### Frontend (Cliente)

- **react**: Biblioteca JavaScript para construção de interfaces de usuário.
- **react-dom**: Pacote de renderização DOM para React.
- **react-icons**: Biblioteca de ícones para React.
- **react-scripts**: Conjunto de scripts e configurações para projetos React.
- **react-toastify**: Biblioteca para exibir notificações no estilo toast em aplicativos React.
- **styled-components**: Biblioteca para estilização de componentes em React.
- **axios**: Cliente HTTP baseado em Promise para o navegador e Node.js.

## Instruções de Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).
2. Clone este repositório para o seu ambiente local.
3. Instale as dependências do backend executando `npm install` na pasta `api`.
4. Instale as dependências do frontend executando `npm install` na pasta `frontend`.
5. Certifique-se de ter um banco de dados MySQL ou outro banco de dados instalado e configurado corretamente para a API.
6. Configure as informações de conexão com o banco de dados no arquivo de configuração apropriado da API.
7. Após configurar o banco de dados, inicie o servidor da API executando `npm start` na pasta `api`.
8. Inicie o servidor de desenvolvimento do frontend executando `npm start` na pasta `frontend`.

## Rotas da API

As rotas da API estão definidas no arquivo `api/routes/user.js`:

- **GET (http://localhost:3000/)**: Retorna a lista de todos os usuários cadastrados.
- **POST (http://localhost:3000/)**: Adiciona um novo usuário à base de dados.
- **PUT (http://localhost:3000/:id)**: Atualiza as informações de um usuário específico.
- **DELETE (http://localhost:3000/:id)**: Exclui um usuário específico da base de dados.


