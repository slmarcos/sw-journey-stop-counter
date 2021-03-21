# **Star Wars - Journey stop counter**

# **Requisitos**
  - Node 14.x
  - Docker-compose
  - Docker engine

# **Executar a aplicação**

  Navegue até a pasta infra e execute o script `start.sh`. Ele rodará o `npm install` nos diretórios ***api*** e ***web***, na sequência irá gerar o build dos mesmos e por fim iniciará os containers conforme a configuração do ***docker-compose.yaml***.
  A aplicação estará disponível para acesso no navegador pelo endereço http://localhost.

# **API**

A api por padrão é exposta na porta ***3010***.

# **Scripts disponíveis**

### `npm run start`
Inicia a aplicação executando o arquivo main.

### `npm run build`
Gera o build do projeto.

### `npm run test`
Executa todos os testes

### `npm run test:unit`
Executa os testes unitários no modo watch

### `npm run test:integration`
Executa os testes de integração no modo watch

### `npm run test:ci`
Executa todos os testes e gera o coverage

# **Endpoints**

## Buscar todas as starships
`[GET] /api/journey/starships/:distance`
### Request
### Response
    statusCode: 200
    [
      {
        "name": string,
        "stops": string | number
      }
    ]

# **Erros**
## Falha na solicitação - Parâmetro inválido
    statusCode: 400
    {
      "error": "Invalid param: ${nome do parâmetro}"
    }

## Falha interna
    statusCode: 500
    {
      "error": "Internal server error"
    }
