
import React from "react";

export default function MenuItem({text}) {
  return (
    <div className="w-3/12 bg-gray-200 px-10 py-6 border border-gray-300 flex flex-col items-center justify-center mx-20 my-5">
        <div className="bg-blue-600 rounded-full w-20 h-20 my-10"></div>
        <div>{text}</div>
    </div>
  );
}