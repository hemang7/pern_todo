const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hmtodo',
    password: 'ROOT',
    port: 5432
});

module.exports = pool;