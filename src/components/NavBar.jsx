import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 bg-gray-300 h-16 px-20 flex items-center justify-between shadow-md">
      <div className=" flex items-center">
        <div className="bg-orange-600 rounded-full w-10 h-10"></div>
        <div className="mr-2">Name</div>
      </div>
      <div className="w-[100px] text-gray-800">Sign Out</div>
    </nav>
  );
}
