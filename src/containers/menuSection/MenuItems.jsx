import React from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

export default function MenuItems() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center px-10 mx-10">
      <div></div>
      <Link to={`/registers/register`} ><MenuItem text = {'دروس ثبت نامی'}/></Link>
      <Link to={`/registers/preregisters`} ><MenuItem text = {"دروس پیش ثبت نامی"}/></Link>
    </div>
  );
}