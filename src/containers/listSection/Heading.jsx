import React from "react";

export default function Heading() {
  return (
    <div className="w-full flex justify-between px-10 py-5 border-b border-r-gray-600">
        <h1 className="font-semibold text-xl text-gray-700">لیست ترم‌ها</h1>
        <button className="font-semibold text-l text-gray-700">کمترین تعداد ثبت نامی</button>
    </div>
  );
}