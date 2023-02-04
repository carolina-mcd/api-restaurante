const Router = require('express')
const UserUseCase = require('./usecases/userUseCase')
const FoodUseCase = require('./usecases/foodUseCase')

const user = new UserUseCase()
const food = new FoodUseCase()

const routes = Router()

routes.post('/users', user.create)
routes.post('/foods', food.create)

module.exports = routes