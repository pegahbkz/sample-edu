import React from "react";

export default function ListItem() {
  return (
    <div className="w-5/12 bg-gray-200 rounded-md px-4 py-6 border border-gray-300 flex items-center justify-between mx-10 my-2">
      <h4 className="font-light text-lg">نام درس</h4>
      <div className="flex">
        <button className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white mx-1">
          اکشن ۱
        </button>
        <button className="px-5 py-2 rounded-md bg-blue-300 hover:bg-blue-400 hover:cursor-pointer text-white mx-1">
          اکشن ۲
        </button>
      </div>
    </div>
  );
}
