import React from "react";
import ListItem from "./ListItem";

export default function ListItems() {
  return (
    <div className="w-full p-10">
      <div className="w-full flex flex-wrap">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}
