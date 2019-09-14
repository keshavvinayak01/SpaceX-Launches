const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = requre('./schema');
const axios  = require('axios')
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));