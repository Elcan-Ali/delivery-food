const MealSchema = require("../../../models/MealSchema")
const RestaurantSchema = require("../../../models/RestaurantSchema")

exports.getMeal = async (req, res) => {
    try {
        const data = await MealSchema.findOne({
            where: { slugName: req.params.name },
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
        const restaurant = await RestaurantSchema.findOne({
            where: {
                id: data.restaurantId
            }
        })

        res.status(200).json({ ...data.dataValues, restaurant })
    }
    catch (err) {
        res.send(err)
    }
}

