import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({term}) {
  return (
    <div className="w-5/12 bg-gray-200 rounded-md px-4 py-6 border border-gray-300 flex items-center justify-between mx-10 my-2">
      <h4 className="font-light text-lg">{term.name ? term.name : 'نام درس'}</h4>
      <div className="flex">
        <Link to={term.name} >
          <button className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white mx-1">
            ویرایش
          </button>
        </Link>
        <button className="px-5 py-2 rounded-md bg-red-500 hover:bg-red-400 hover:cursor-pointer text-white mx-1">
          حذف
        </button>
      </div>
    </div>
  );
}
