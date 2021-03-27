const products = require('../products.json')

const getProducts = (req, res) => {
   const { price } = req.query
   if(price) {
      const filteredItems = products.filter(item => item.price >= +price)
      res.status(200).send(filteredItems)
   } else {
      res.status(200).send(products)
   }
   
}

module.exports = getProducts
