import React from "react";

export default function SubmitButton({ text }) {
  return (
    <button className="w-full bg-blue-500 text-white h-10 rounded my-10">
      {text}
    </button>
  );
}
