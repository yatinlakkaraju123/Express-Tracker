const mongoose = require('mongoose')

const ExpensesSchema = new mongoose.Schema(
    {
        email: String,
  title: String,
  expense: Number,
  date: { type: Date, default: Date.now },
    }
)
const ExpressModel = mongoose.model("expenses",ExpensesSchema)

module.exports = ExpressModel