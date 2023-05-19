// Requer as extensões necessárias para executar o GraphQL e fazer as requisições
var { graphql, buildSchema } = require("graphql")

// Cria o schema utilizando a linguagem de definição de schema do GraphQL
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// O rootValue fornece uma função de resolução para cada ponto de extremidade da API
// Invocamos automaticamente a função que retorna a string "Hello world!"
var rootValue = {
  hello: () => {
    return "Hello world!"
  },
}

// Executa a consulta GraphQL '{ hello }' e imprime a resposta
graphql({
  schema,
  source: "{ hello }",
  rootValue,
}).then(response => {
  console.log(response)
})