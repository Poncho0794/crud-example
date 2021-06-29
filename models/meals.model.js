/**
 * CAPA DE BASE DE DATOS
 * id: number
 * name: string
 * description: string
 * price: number
 */

const fs = require('fs')
const meals = require('../data/meals.json')
const path = require('path')
const mealsModel = {
  create: function(mealInfo) {
    console.log('-----DB: ', meals)
    console.log('-----INFO: ', mealInfo)

    if(!Object.keys(mealInfo).length) throw new Error('Invalid Meal');
    
    mealInfo.id = meals.length + 1;
    meals.push(mealInfo)
    fs.writeFileSync(
      path.resolve(__dirname,'../data/meals.json'), 
      JSON.stringify(meals))
    return mealInfo
  },
  list: function(filters) {
    if(!filters) return meals
    
  }
}

module.exports = mealsModel