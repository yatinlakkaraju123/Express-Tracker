import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './Navbar';
import axios from 'axios';
export default function Profile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [title,setTitle] = useState("");
  const [expense,setExpense] = useState(0);
  const submit = async (e)=>{
    e.preventDefault();
    const token = await getAccessTokenSilently();
    console.log(title);
    const email = user.email;
    //await axios.post("http://localhost:3001/addExpenses",{title,expense})
    await axios.post(
      'https://express-tracker-bxct.onrender.com/addExpenses',
      { email,title, expense },
      
    ).then((e)=>alert("Expense Added")).catch((e)=>console.log(e));
    
  }
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-0j5tqy64zwue15mk.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  return (
    <>
      <Navbar />
      
      <br></br>
<br></br>

<br></br>

<br></br>

<form class="max-w-sm mx-auto" onSubmit={submit}>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" onChange={(e)=>setTitle(e.target.value)}id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
    <input type="number" onChange={(e)=>setExpense(e.target.value)}id="expense" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<br></br>
<br></br>

<br></br>

<br></br>

      



      </>
  );
}
