const products = require('../products.json')

const getProduct = (req,res) => {
   const { id } = req.params
   const item = products.find(e => e.id === +id)
   if(item) {
      res.status(200).send(item)
   } else {
      res.status(500).send('Item not in the list')
   }
}

module.exports = getProduct