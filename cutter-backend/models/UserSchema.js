const { DataTypes } = require('sequelize')
const sequelize = require('../db/db')

const UserSchema = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const sync = async () => {
    await UserSchema.sync()
    console.log("UserSchema is sync");
}
sync()

module.exports = UserSchema