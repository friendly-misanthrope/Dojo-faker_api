const express = require("express")
const app = express()
const port=8000
const { faker } = require("@faker-js/faker")

// Middleware for POST requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Function to create new user
const createUser = () => {
  const newUser = {
    _id: faker.random.numeric(2),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: `${faker.random.numeric(3)}-${faker.random.numeric(3)}-${faker.random.numeric(4)}`
  }
  return newUser
}

// POST route to call createUser() when route visited
app.post('/api/users/new', (request, response) => {
  response.json(createUser())
})