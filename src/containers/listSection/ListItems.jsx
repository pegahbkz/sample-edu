import React from "react";
import ListItem from "./ListItem";

export default function ListItems({terms}) {
  return (
    <div className="w-full p-10">
      <div className="w-full flex flex-wrap">
        {terms.map((term , i)=>

        <ListItem key={i} term={term}/>
        )}

      </div>
    </div>
  );
}
