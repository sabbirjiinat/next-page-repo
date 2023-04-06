import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className="bg-gray-100 px-4 py-5">
          <div className="flex justify-between">
              <Link to='/' className="inline-flex">
                  <BoltIcon className="h-6 w-6 text-blue-500"></BoltIcon>
                  <span className="font-bold tracking-wide text-gray-800">nextPage</span>
              </Link>  
              <ul className="hidden md:flex gap-10 font-semibold">
                  <li className="hover:text-blue-400">
                      <NavLink className={({isActive})=>isActive?'text-blue-700' : '' } to='/'>Home</NavLink>
                  </li>
                  <li className="hover:text-blue-400">
                      <NavLink className={({isActive})=>isActive?'text-blue-700' : ''} to='/books'>Books</NavLink>
                  </li>
                  <li className="hover:text-blue-400">
                      <NavLink className={({isActive})=>isActive?'text-blue-700' : ''} to='/about'>About Us</NavLink>
                  </li>
              </ul>
      </div>
    </div>
  );
};

export default Header;
