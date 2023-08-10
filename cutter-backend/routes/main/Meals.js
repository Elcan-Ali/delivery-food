const express = require("express")
const { getMeals } = require("../../controller/main/Meal/getMeals")
const { getMeal } = require("../../controller/main/Meal/getMeal")
const MealsRouter = express.Router()

MealsRouter.get('/', getMeals)
MealsRouter.get('/:name', getMeal)


module.exports = MealsRouter