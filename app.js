const express = require('express');
const connection = require('./db.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.get('/', (request, response) =>{
    response.send('Hello World!')
})

app.get('/clientes', (request, response) => {
    response.setHeader("Acess-Control-Allow-Origin", "*");
    response.header("Acess-Control-Allow-Methods", "GET");
    return connection.execSQLQuery('SELECT * FROM cliente', response)
})

app.get('/clientes/:id', (request, response) => {
    response.setHeader("Acess-Control-Allow-Origin", "*");
    response.header("Acess-Control-Allow-Methods", "GET");
    return connection.execSQLQuery('SELECT * FROM cliente WHERE id=' + request.params.id, response)
})

app.put('/clientes/:id', (request, response) => {
    response.setHeader("Acess-Control-Allow-Origin", "*");
    response.header("Acess-Control-Allow-Methods", "GET, PUT");
    return connection.execSQLQuery(
        "UPDATE cliente SET nome ='" + request.body.nome +
        "' WHERE id=" + request.params.id, 
        response)
})

app.post('/clientes/', (request, response) => {
    response.setHeader("Acess-Control-Allow-Origin", "*");
    response.header("Acess-Control-Allow-Methods", "GET, POST");
    return connection.execSQLQuery(
        "INSERT INTO cliente(nome) value('"+request.body.nome+"')",
        response)
})

app.delete('/clientes/:id', (request, response) => {
    response.setHeader("Acess-Control-Allow-Origin", "*");
    response.header("Acess-Control-Allow-Methods", "GET, DELETE");
    return connection.execSQLQuery(
        "DELETE FROM cliente WHERE id=" + request.params.id, response)
})


const PORT = 5000;

app.listen(PORT)