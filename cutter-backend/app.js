require('dotenv').config()
const express = require('express')
const MealsRouter = require('./routes/main/Meals')
const app = express()

app.use("/meals", MealsRouter)



app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`);
})