const { DataTypes } = require('sequelize')
const sequelize = require('../db/db')

const RestaurantSchema = sequelize.define("restaurants", {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slugName: {
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
    openTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    closeTime: {
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