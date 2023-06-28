import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Layout(props) {
  return (
    <div className="w-full flex flex-row pt-16 rtl-grid">
      <NavBar />
      <SideBar />
      <div className="w-10/12 bg-white p-5">{props.children}</div>
    </div>
  );
}
