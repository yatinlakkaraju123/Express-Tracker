import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from './Navbar';
export default function Home() {
  

    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  return (
    <div>
      


    <Navbar/>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Expense Tracker</h1>
      <p class="mb-8 leading-relaxed">Track your expenses using this Expense Tracker Application</p>
      
    
    </div>
  </div>
</section>

    </div>
  )
}
