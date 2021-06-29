
const mealsModel = require('../models/meals.model')
const mealsController = {
  index: function(req, res) {
    try {
      const meals = mealsModel.list()
      console.log(meals)
      return res.status(200).render('index', { title: 'Restaurante CRUD', meals })
    } catch(err) {
      console.log(err)
      return res
      .status(500)
      .render('error', { message: 'Occurrio un error al listar los platillos', status: 500 })
    }
  },
  agregarView: function(req, res) {
    res.status(200).render('add-meal')
  },
  crear: function(req, res) {
    try {
      const mealInfo = req.body
      mealsModel.create(mealInfo)
      res.redirect('/')
    } catch(err) {
      console.log(err)
      return res
      .status(500)
      .render('error', { message: 'Occurrio un error al crear un platillo ', status: 500 })
    }
  },
  detalle: function(req, res) {
    const mealId = req.params.id
    const meal = mealsModel.findById(mealId)
    console.log('------ INFO: ', mealId, meal)
    res.status(200).render('meal-detail', { meal } )
  },
  actualizarView: function(req, res) {
    const mealId = req.params.id
    const meal = mealsModel.findById(mealId)
    res.status(200).render('update-meal', { meal } )
  },
  update: function(req, res) {
    try {
      const mealId = req.params.id
      const meal = req.body
      mealsModel.update(meal, mealId)
      res.redirect(`/detail/${mealId}`)
    } catch(err) {
      console.log(err)
      return res
      .status(500)
      .render('error', { message: 'Occurrio un error al actualizar un platillo ', status: 500 })
    }
    
  }
}

module.exports = mealsController