const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    itemName: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    Picture: {
        type:String,
        required:true
    }
})

const Product = mongoose.model('Product', ProductsSchema)
module.exports = Product