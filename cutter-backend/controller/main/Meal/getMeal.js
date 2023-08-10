const MealSchema = require("../../../models/MealSchema")

exports.getMeal = async (req, res) => {
    try {
        const data = await MealSchema.findOne({
            where: { slugName: req.params.name }
        })
        res.status(200).json(data)
    }
    catch (err) {
        res.send(err)
    }
}

