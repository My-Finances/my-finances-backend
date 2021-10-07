const port = 3000;
const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json({
        message : 'API created for hacktoberfest 2021',
        repository : 'https://github.com/My-Finances/my-finances-backend'
    })
});

server.listen(port, () => {
    console.log("🚀 ~ server.listen ~ port", port);
})