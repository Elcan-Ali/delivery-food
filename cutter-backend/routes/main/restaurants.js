const express = require("express")
const { getRestaurants } = require("../../controller/main/restaurant/getRestaurants")
const { getRestaurant } = require("../../controller/main/restaurant/getRestaurant")
const RestaurantRouter = express.Router()

RestaurantRouter.get('/', getRestaurants)
RestaurantRouter.get('/:name', getRestaurant)


module.exports = RestaurantRouter