import React from "react";
import Layout from "../containers/Layout";
import ListItems from "../containers/listSection/ListItems";
import SearchBar from "../containers/listSection/SearchBar";
import Heading from "../containers/listSection/Heading";
import MenuItems from "../containers/menuSection/MenuItems";

export default function Terms() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <Heading />
        <SearchBar />
        <ListItems />
        <MenuItems />
      </div>
    </Layout>
  );
}
