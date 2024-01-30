const mongoose  = require('mongoose');
const expenseSchema = new mongoose.Schema({
    amount: Number,
    desc : String,
    
    id: Number,
    title : String,
    price: Number,
    description: String,
    category: String,
    image: String, // Assuming the image will be stored as a URL or file path
    rating: [{
        value: Number, // Rating value (e.g., 1, 2, 3, 4, 5)
        comment: String // Optional comment for the rating
    }]


});
const Expense = mongoose.model('productdetails',expenseSchema);
module.exports = Expense;