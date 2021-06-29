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
    this._save(mealInfo)
    return mealInfo
  },
  list: function(filters) {
    if(!filters) return meals  
  },
  findById: function(mealId) {
    console.log(meals)
    return meals.find(meal => meal.id === parseInt(mealId))
  },
  
  update: function(mealInfo, mealId) {
    let mealToUpdate = this.findById(mealId)
  
    mealToUpdate = Object.assign({}, mealToUpdate, mealInfo)
    
    this._save(mealToUpdate, mealId)
  },
  _save: function (mealInfo, mealId) {
    if(mealId) {
      const mealIndex = meals.findIndex(meal => meal.id == mealId)
      meals[mealIndex] = mealInfo
    } else {
      mealInfo.id = meals.length + 1;
      meals.push(mealInfo)
    }
    fs.writeFileSync(
      path.resolve(__dirname,'../data/meals.json'), 
      JSON.stringify(meals))
  },
}

module.exports = mealsModel