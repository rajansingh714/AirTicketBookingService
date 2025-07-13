const bodyParser = require('body-parser');
const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');



const ServerSetUp = async () => {
    
        // create a express Object
        const app = express();  

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));


        app.use('/api', apiRoutes);

        app.listen(PORT, () => {
            console.log(`server is started at ${ PORT }`);
        });

        if(process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
}

module.exports = ServerSetUp();



