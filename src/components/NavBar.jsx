import React from "react";
import CapIcon from "./icons/CapIcon";
import UserIcon from "./icons/UserIcon";
import SignOutIcon from "./icons/SignOutIcon";


export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 bg-gray-300 h-16 px-8 flex items-center justify-between shadow-md">
      <div className=" flex items-center">
        <CapIcon />
        <UserIcon />
        <div className="mr-2">Name</div>
      </div> 
      <div className="w-[120px] flex text-gray-800">
        <h3> Sign Out</h3>
        <SignOutIcon />  
        </div>
    </nav>
  );
}
