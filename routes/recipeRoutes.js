const express=require('express')
const router=express.Router();

const{insertRecipe,deleteRecipe,updateRecipe}=require('../controllers/recipeController')

router.post('/insertRecipe',insertRecipe)
router.delete('/deleteRecipe',deleteRecipe)
router.put('/updateRecipe',updateRecipe)

module.exports=router



