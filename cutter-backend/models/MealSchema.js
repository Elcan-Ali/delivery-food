const { DataTypes } = require('sequelize')
const sequelize = require('../db/db')
const { Meals } = require('../data/dummy-data')

const MealSchema = sequelize.define("meals", {
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
        allowNull: true,
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
    slugName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

const sync = async () => {
    await MealSchema.sync({ force: true })
    await MealSchema.bulkCreate(Meals)
    console.log("MealSchema is sync");
}
sync()

module.exports = MealSchema