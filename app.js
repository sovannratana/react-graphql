const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()

app.use('/graphql', graphqlHTTP({
  graphiql: true,
}))

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})
