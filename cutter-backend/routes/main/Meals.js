const express = require("express")
const { getMeals } = require("../../controller/main/meal/getMeals")
const { getMeal } = require("../../controller/main/meal/getMeal")

const MealsRouter = express.Router()

MealsRouter.get('/', getMeals)
MealsRouter.get('/:name', getMeal)


module.exports = MealsRouter