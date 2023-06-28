import React from "react";

export default function Input({ placeholder }) {
  return (
    <input
      type="text"
      className="w-full rounded border border-gray-300 h-10 px-2 text-gray-400 my-2"
      placeholder={placeholder}
    />
  );
}
