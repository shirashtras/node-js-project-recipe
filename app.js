const express = require('express')
const mongoose = require('mongoose')
const recipeRoutes = require('./routes/recipeRoutes')

const app = express()
app.use(express.json())


mongoose.connect("mongodb+srv://shirashtras_db_user:SSdiJPhAfDsbyuK3@cluster0.4zxa3pn.mongodb.net/recipesDB?retryWrites=true&w=majority", 
  ).then(() => { app.listen(3000, () => console.log(`server runing on port ${3000}`))
    console.log(`connect DB`)
  }).catch((error) => console.log(error.message));


app.use('/recipes',recipeRoutes)

