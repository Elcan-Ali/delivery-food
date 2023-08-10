const config = require('../config/config')
const { database, user, password, host } = config.db
const Sequelize = require("sequelize")


const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
    host
})


const connection = async () => {
    await sequelize.authenticate()
    console.log("Sequelize authenticated");
}
connection()

module.exports = { connection }



