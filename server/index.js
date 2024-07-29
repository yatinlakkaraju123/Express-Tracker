const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ExpensesModel = require("./models/expenses.js")
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config(); 
mongoose.connect(process.env.MONGO_URI)

//mongodb+srv://lakkarajuyatin61:s97hfJtgB0MliULg@cluster0.4zearzm.mongodb.net/
app.post("/addExpenses",async (req,res)=>{
const {title,expense} = req.body;

ExpensesModel.create(req.body).then((e)=>res.json(e)).catch((e)=>res.json(e));

})
//   .then((e)=>res.json(e)).catch((e)=>res.json(e));
app.post("/getExpenses", async (req, res) => {
    const { email} = req.body;
  
    try {
      const expenses = await ExpensesModel.find({
        email: email
        
      });
      res.status(200).json(expenses);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
app.listen(3001,()=>{
    console.log("Server is running")
})