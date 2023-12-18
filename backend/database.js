require('dotenv').config({path: '.env.local'});
const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );

    CREATE TABLE IF NOT EXISTS "posts" (
        id SERIAL PRIMARY KEY,
        body TEXT NOT NULL,
        "user" uuid REFERENCES users(id) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;
    

execute(createTblQuery).then(result => {
    if (result) {
        console.log('Tables "users" and "posts" are created');
    }
});

module.exports = pool;