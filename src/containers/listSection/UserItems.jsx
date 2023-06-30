import React from "react";
import UserItem from "./UserItem";

export default function UserItems({users}) {
  return (
    <div className="w-full p-10">
      <div className="w-full flex flex-wrap">
        {users.map((user , i)=>

        <UserItem key={i} user={user}/>
        )}

      </div>
    </div>
  );
}