import React from "react";
import Layout from "../containers/Layout";
import ListItems from "../containers/listSection/ListItems";

export default function Terms() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="w-full flex px-10 py-5 border-b border-r-gray-600">
          <h1 className="font-semibold text-xl text-gray-700">لیست ترم‌ها</h1>
        </div>

        <ListItems />
      </div>
    </Layout>
  );
}
