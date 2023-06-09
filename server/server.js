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


// Function to create new company
const createCompany = () => {
  const newCompany = {
    _id: faker.random.numeric(2),
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
  return newCompany
}
// POST route to call createCompany() when route visited
app.post('/api/companies/new', (request, response) => {
  response.json(createCompany())
})

// POST route to call createUser AND createCompany when route visited,
// and add them as key/value pairs to a new object that will become the response.
app.post('/api/user/company', (request, response) => {
  user = createUser()
  company = createCompany()

  userCompany = {
    user: user,
    company: company
  }

  response.json(userCompany)
})


// Run Express server
app.listen( port, () =>{
  console.log(`Listening on port: ${port}`)
} )