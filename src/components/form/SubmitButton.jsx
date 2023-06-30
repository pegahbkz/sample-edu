import React from "react";

export default function SubmitButton({ text , onClick }) {
  return (
    <button className="w-full bg-blue-500 text-white h-10 hover:bg-blue-600 rounded my-10" onClick={onClick}>
      {text}
    </button>
  );
}
