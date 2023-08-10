const { DataTypes } = require('sequelize')
const sequelize = require('../db/db')

const RestaurantSchema = sequelize.define("restaurants", {
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
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const sync = async () => {
    await RestaurantSchema.sync()
    console.log("RestaurantSchema is sync");
}
sync()

module.exports = RestaurantSchema