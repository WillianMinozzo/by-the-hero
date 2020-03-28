const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* Rota / Recurso
*/

/* 
*Metodos Http
*
*GET: buscar/listar informação back-end
* POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: deletar uma informação no back-end
*/

/*
* Tipos de parâmentros
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utulizado para criar ou alterar recursos
*/

/*
* SQL: MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
*NoSQL: MongoDB, CouchDB, etc
*/

/*
* Driver: SELECT * FROM user
*Query Builder: tablet('users').select('*').where
*/



app.listen(3333);