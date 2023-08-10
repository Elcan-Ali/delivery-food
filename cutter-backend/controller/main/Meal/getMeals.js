const MealSchema = require("../../../models/MealSchema")

exports.getMeals = async (req, res) => {
    try {
        const data = await MealSchema.findAll()
        res.status(200).json(data)
    }
    catch (err) {
        res.send(err)
    }
}

