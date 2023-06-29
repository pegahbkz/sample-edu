import React from "react";
import MenuItem from "./MenuItem";

export default function MenuItems() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center px-10 mx-10">
      <div></div>
        <MenuItem text = "hi" />
        <MenuItem />
        <MenuItem />
        <MenuItem />
    </div>
  );
}