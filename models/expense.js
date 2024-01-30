const mongoose  = require('mongoose');
const expenseSchema = new mongoose.Schema({
    amount: Number,
    desc : String,
    
    id: Number,
    title : String,
    price: Number,
    description: String,
    category: String,
    image: String,
});
const Expense = mongoose.model('Expense',expenseSchema);
module.exports = Expense;