import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>

      <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Expenses Tracker</span>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link to="/"><li>
                  <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li></Link>
                <li>
                  {isAuthenticated ? <Link to="/Profile"><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Add</a>
                  </Link> : <></>}        </li>

                
                <li>
                  {isAuthenticated ? <Link to="/View"><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">View</a>
                  </Link> : <></>}        </li>

                <li>
                  {
                    isAuthenticated ? <><button onClick={() => {
                      logout({ logoutParams: { returnTo: window.location.origin } })



                    }

                    }>
                      Log Out
                    </button></> :
                      <button onClick={() => {
                        loginWithRedirect()


                      }}>Log In</button>
                  }
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>


    </div>
  )
}