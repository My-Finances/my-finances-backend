const port = 3000;
const mysql = require('mysql');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: 'src/.env' });

const server = express();

server.use(express.json());

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

db.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("🚀 ~ MYSQL Connected...")
    }
});

server.get('/', (req, res) => {
    res.json({
        message : 'API created for hacktoberfest 2021',
        repository : 'https://github.com/My-Finances/my-finances-backend'
    })
});

server.listen(port, () => {
    console.log("🚀 ~ server.listen ~ port", port);
})