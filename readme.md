## Tecnologias utilizadas
  - Adonisjs
  - MYSQL

### Requisitos
  - MYSQL com database e usuário criados
  - Criando a base de dados:
    - ```CREATE DATABASE EXAMPLE;```
  - Criando usuário:
    - ```CREATE USER 'example'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';```
  - Dando privilégios ao usuário sobre a base de dados criada:
    - ```GRANT ALL PRIVILEGES ON EXAMPLE.* TO 'example'@'localhost';```
    - ```FLUSH PRIVILEGES;```
### Como rodar:
  - Clone o repositório
  - Acesse o diretório e rode:
     - ```yarn install```
  - Criar e preencher o arquivo **.env** com as informações do banco de dados (veja o arquivo .env.example)

## Rotas da aplicação:
#### Listagem de Usuário(s): 
  - Para listar todos os usuários:
      - .../users/list
  - Para listar um único usuário:
      - .../users/list/userId
      - Exemplo: .../user/list/1 

#### Criação de Usuário(s): 
  - Para criar um usuário:
      - .../users/create

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
      - .../users/update

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

