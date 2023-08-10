const MealSchema = require("../../../models/MealSchema")

exports.getMeals = async (req, res) => {
    try {
        const data = await MealSchema.findAll({
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
        res.status(200).json(data)
    }
    catch (err) {
        res.send(err)
    }
}

