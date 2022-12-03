const db = require('mysql2');

function execSQLQuery(sqlQry, response){
    const connection = db.createConnection({
        host: 'localhost',
        port: '3309',
        user: 'root',
        password: 'root',
        database: 'extensao_node'
    });

    connection.query(sqlQry, function(err, results, fields){
        if(err){
            response.json(err);
        }else{
            response.json(results);
        }
        connection.end();
    })
}

exports.execSQLQuery = execSQLQuery;