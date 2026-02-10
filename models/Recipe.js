const mongoose = require('mongoose')

const recipeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    time:{
        type:Number,
        required:true},
    ingredients:{
        type:[String],
        required:true
    },
    category:{
        type:String,
        enum:['חלבי','בשרי','פרווה'],
        required:true
    },
    isFavorite:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('Recipe', recipeSchema)
