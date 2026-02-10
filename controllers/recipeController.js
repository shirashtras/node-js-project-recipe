const Recipe = require('../models/Recipe')

exports.addRecipe=async(req,res)=>{
    try {
        const recipe = await Recipe.create(req.body)
        res.json(recipe)
    }
    catch (error) {
     console.log(error.message)
    }
}

exports.deleteRecipe =async(req,res)=>{
   await Recipe.findByIdAndDelete(req.params.id)
    res.json({message:'Deleted'})
}

exports.updateRecipe =async(req,res)=>{
      try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id,req.body,{ returnDocument: 'after' })
    res.json(recipe)
  } catch (err) {
      console.log(error.message)
  }
}







