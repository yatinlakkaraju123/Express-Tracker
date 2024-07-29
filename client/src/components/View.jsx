import React,{useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
export default function View() {
    const [totalExpense, setTotalExpense] = useState(0);
  const calculateTotalExpense = (expenses) => {
    
    
    const total = expenses.reduce((sum, expense) => sum + expense.expense, 0);
    setTotalExpense(total);
  };
    const [fromDate,setFromDate] = useState("")
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const { user } = useAuth0();
    const [toDate,setToDate] = useState("")
    const [expenses,SetExpenses] = useState(null)
    const email = user.email;
    const submit = async(e)=>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:3001/getExpenses",{email}).then(
            (e)=>
            {   const fetchedData = e.data;
                    const localfromDate = new Date(fromDate).toLocaleDateString();
                    const localtoDate = new Date(toDate).toLocaleDateString()
                    const filtered = fetchedData.filter((expense) => {
                      const expenseDate = new Date(expense.date).toLocaleDateString()
                      return (
                        expenseDate >=(localfromDate) && expenseDate <= (localtoDate)
                      );
                    });
                    setFilteredExpenses(filtered);
                    calculateTotalExpense(filtered);
                   

                  /* else {
                    setFilteredExpenses(fetchedData);
                  }*/
                  
            }
                ).catch((e)=>console.log(e))
    }
  return (
    <div>
        <Navbar/>
        <br></br>
        <br></br>

        <br></br>
        <br></br>

      <form class="max-w-sm mx-auto" onSubmit={submit}>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From Date</label>
    <input type="date" onChange={(e)=>setFromDate(e.target.value)}id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To Date</label>
    <input type="date" onChange={(e)=>setToDate(e.target.value)}id="expense" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<br></br>
<br></br>

<br></br>

<div class="flex items-center justify-center">
    <table class="text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Expense Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Expense Amount
                </th>
               
                
            </tr>
        </thead>
        <tbody>
           
            {filteredExpenses.map((expense)=>{
               return  <tr class="bg-white dark:bg-gray-800">
                <td class="px-6 py-4">
                {expense.title}
            </td>
            <td class="px-6 py-4">
            {expense.expense}
        </td>
      </tr>
            })}
           
      
        </tbody>
       <p className='px-6 py-4'>SUM:{totalExpense}</p> 
    </table>
  
</div>
    </div>
  )
}
