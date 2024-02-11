const {Sequelize} = require('sequelize')
require('dotenv').config()
const db = process.env.DB_NAME
const user = process.env.DB_USER
const pass = process.env.DB_PASSWORD

const sequelize = new Sequelize(db,user,pass,{
    dialect: 'mysql',
    host:'localhost'
})

module.exports = sequelize