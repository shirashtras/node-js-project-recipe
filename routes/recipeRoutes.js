const express = require('express')
const router = express.Router()
const { addRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipeController')

router.post('/insertRecipe', addRecipe)
router.delete('/:id', deleteRecipe)
router.put('/:id', updateRecipe)

module.exports = router