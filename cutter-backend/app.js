require('dotenv').config()
const express = require('express')
const app = express()

const MealsRouter = require('./routes/main/Meals')
const RestaurantRouter = require('./routes/main/restaurants')

app.use(express.json())
app.use("/meals", MealsRouter)
app.use("/restaurants", RestaurantRouter)



app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`);
})