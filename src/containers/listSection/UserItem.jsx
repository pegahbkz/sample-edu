import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({user}) {
  return (
    <div className="w-5/12 bg-gray-200 rounded-md px-4 py-6 border border-gray-300 flex items-center justify-between mx-10 my-2">
      <h4 className="font-light text-lg">{user}</h4>
      <div className="flex">
        <Link to={user} >
          <button className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white mx-1">
            تایید
          </button>
        </Link>
        <button className="px-5 py-2 rounded-md bg-blue-400 hover:bg-blue-300 hover:cursor-pointer text-white mx-1">
          رد
        </button>
      </div>
    </div>
  );
}
