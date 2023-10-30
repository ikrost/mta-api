# mta-api
API para facilitar a comunicação externa com o servidor MTA

⚠ Todos as requisições devem conter em seu Header o parâmetro Authorization especificando o token de acesso da API.

# Rodando a API
Setup do projeto:
	1. `npm run start`
	2. `ts-node-dev --respawn --transpile-only api/app.ts`

## Endpoints user
### `POST` /updateUser/#id/
Altera o valor dos usuários na API de um valor já inserido.
| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `number` | **Required**. O ID do usuário armazenado |

### `GET` /getUser/#id/
Retorna todas as informações armazenadas do usuário através do ID.
| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `number` | **Required**. O ID do usuário armazenado |

### `GET` /getAll/
Retorna todos os usuários armazenados.

### `POST` /addUser/
Insere um usuário na API.

### `GET` /deleteUser/#id/
Deleta o usuário através do ID.
| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `number` | **Required**. O ID do usuário armazenado |

## License

[MIT](https://choosealicense.com/licenses/mit/)