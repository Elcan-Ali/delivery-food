const { DataTypes } = require('sequelize')
const sequelize = require('../db/db')

const MealSchema = sequelize.define("meals", {
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
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kcal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

const sync = async () => {
    await MealSchema.sync()
    console.log("MealSchema is sync");
}
sync()

module.exports = MealSchema