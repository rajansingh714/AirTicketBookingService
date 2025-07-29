const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');

const app = express();

const serverSetup = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));


    app.use('/api', apiRoutes);

    app.listen( PORT,  () => {
        console.log(`server is starting at ${PORT}`);
    });

    if(process.env.DB_SYNC) {
        db.sequelize.syn({ alter: true });
    }
}

serverSetup();

