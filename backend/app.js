const express = require('express')
const sequelize = require('./utils/db')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
app.use(cors({ origin: ['http://localhost:3000',"http://127.0.0.1:3000'"] }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const taskRoute = require('./routes/tasks')
app.use(taskRoute)

const startServer = async ()=> {
    try{
        await sequelize.sync()
        app.listen(4000)
    }catch(error){
        console.log(error)
    }
}
startServer()
