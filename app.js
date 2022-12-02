const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (request, response) =>{
    response.send('Hello World!')
    response.end()
})

app.listen(PORT)