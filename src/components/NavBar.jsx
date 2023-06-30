import React from "react";
import CapIcon from "./icons/CapIcon";
import UserIcon from "./icons/UserIcon";
import SignOutIcon from "./icons/SignOutIcon";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const navigate = useNavigate();

  function handleSignOut() {
    removeCookie('auth')
    navigate('/login')
  }

  return (
    <nav className="w-full fixed top-0 bg-gray-300 h-16 px-8 flex items-center justify-between shadow-md">
      <div className=" flex items-center">
        <CapIcon />
        <UserIcon />
        <div className="mr-2">Name</div>
      </div> 
      <div className="w-[120px] flex text-gray-800 hover:cursor-pointer" onClick={handleSignOut}>
        <h3 className="ml-2"> Sign Out</h3>
        <SignOutIcon />  
        </div>
    </nav>
  );
}
