const bodyParser = require('body-parser');
const express = require('express');

const { PORT } = require('./config/serverConfig');


const ServerSetUp = async () => {
    
        // create a express Object
        const app = express();  

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.listen(PORT, () => {
            console.log(`server is started at ${ PORT }`);
        });
}

module.exports = ServerSetUp();



