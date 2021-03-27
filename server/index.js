const express = require('express')
const app = express()
// const products = require('../products.json')
const getProducts = require('./getProducts.js')
const getProduct = require('./getProduct.js')

app.use(express.json())

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)


const PORT = 6510
app.listen(PORT, () => {
   console.log(`your server is running on port ${PORT}`)
})