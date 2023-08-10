const RestaurantSchema = require("../../../models/RestaurantSchema")

exports.getRestaurants = async (req, res) => {
    try {
        const data = await RestaurantSchema.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } })
        res.status(200).json(data)
    }
    catch (err) {
        res.send(err)
    }
}

