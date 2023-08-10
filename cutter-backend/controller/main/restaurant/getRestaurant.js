const MealSchema = require("../../../models/MealSchema")
const RestaurantSchema = require("../../../models/RestaurantSchema")

exports.getRestaurant = async (req, res) => {
    try {
        const data = await RestaurantSchema.findOne({
            where: { slugName: req.params.name },
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
        const meals = await MealSchema.findAll({ where: { restaurantId: data.id } })


        res.status(200).json({ ...data.dataValues, meals })
    }
    catch (err) {
        res.send(err)
    }
}

