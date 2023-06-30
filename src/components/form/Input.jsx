import React from "react";

export default function Input({ placeholder , onChange }) {
  return (
    <input
      type={placeholder === 'Password' ? 'password' : 'text'}
      className="w-full rounded border border-gray-400 h-10 px-2 text-gray-700 my-2"
      placeholder={placeholder}
      onChange={(e)=>onChange(e.target.value)}
    />
  );
}
