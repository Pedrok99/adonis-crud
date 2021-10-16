## Tecnologias utilizadas
  - Adonisjs
  - MYSQL

### Requisitos
  - MYSQL com base de dados e usuário criados.
  - Nodejs

### Como rodar:
#### Base de dados:
  - Criando a base de dados:
    - ```CREATE DATABASE EXAMPLE;```
  - Criando usuário:
    - ```CREATE USER 'example'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';```
  - Dando privilégios ao usuário sobre a base de dados criada:
    - ```GRANT ALL PRIVILEGES ON EXAMPLE.* TO 'example'@'localhost';```
    - ```FLUSH PRIVILEGES;```
#### Aplicação
  - Clone o repositório
  - Acesse o diretório e rode:
     - ```yarn install``` ou ```npm install```
  - Criar e preencher o arquivo **.env** com as informações do banco de dados (veja o arquivo .env.example)
  - Rode as migrações:
     - ```node ace migration:run```
  - Rode o servidor de desenvolvimento:
     - ```yarn dev``` ou ```npm run dev```

## Rotas da aplicação:
#### Listagem de Usuário(s): 
  - Para listar todos os usuários:
      - GET - /users/list
  - Para listar um único usuário:
      - GET - /users/list/userId
      - Exemplo: .../user/list/1 

#### Criação de Usuário(s): 
  - Para criar um usuário:
      - POST - /users/create

Corpo da requisição esperado: 
```
{
  "firstName":"example",
  "lastName": "example",
  "phone": "999999999999",
  "password":"12345",
  "email":"example@mail.com"
}
```

#### Edição de Usuário(s): 
  - Para editar um usuário:
      - POST - /users/update

Corpo da requisição esperado: 
```
{
  "userId": 1, 
  "firstName":"example",
  "lastName": "example",
  "phone": "999999999999",
  "password":"12345",
  "email":"example@mail.com"
}
```
Exemplo de requisição para alteração do nome do usuário:
```
{
	"userId": 1,
	"firstName": "exampleUpdated",
}
```
**Obs:** Apenas o atributo "userId" é obrigatório.

#### Remoção de Usuário: 
  - Para remover um usuário:
      - POST - /users/delete

Corpo da requisição esperado: 
```
{
	"userId":1
}
```