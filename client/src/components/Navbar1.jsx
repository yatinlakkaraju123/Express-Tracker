import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar1 = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home',address:'/',authrequired:false },
    { id: 2, text: 'Add',address:'/',authrequired:true },
    { id: 3, text: 'View',address:'/',authrequired:true },
    { id: 4, text: 'About',address:'/',authrequired:true },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Expense Tracker</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        
        <li
            
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/">Home</Link> 
          </li>
          <li
            
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
             {isAuthenticated ? <Link to="/Profile">Add
              </Link> : <></>} 
          </li>
          <li
            
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {isAuthenticated ? <Link to="/View">View             </Link> : <></>}
          </li>
          <li
            
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
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

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Expense Tracker</h1>

        {/* Mobile Navigation Items */}
      
        <li
            
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
             <Link to="/">Home</Link>
          </li>
          <li
            
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
               {isAuthenticated ? <Link to="/Profile">Add
                </Link> : <></>}
          </li>
          <li
            
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
              {isAuthenticated ? <Link to="/View">View             </Link> : <></>}
          </li>
          <li
            
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {
                    isAuthenticated ? <><button onClick={() => {
                      logout({ logoutParams: { returnTo: window.location.origin } })



                    }

                    }>
                      LogOut
                    </button></> :
                      <button onClick={() => {
                        loginWithRedirect()


                      }}>Log In</button>
                  }
          </li>
      </ul>
    </div>
  );
};

export default Navbar1;