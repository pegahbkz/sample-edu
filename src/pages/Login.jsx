import React from "react";
import Input from "../components/form/Input";
import SubmitButton from "../components/form/SubmitButton";

export default function Login() {
  return (
    <div className="w-full flex h-screen">
      <div className="w-6/12 bg-white flex items-center justify-center">
        <div className="w-6/12 px-3">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <SubmitButton text="Login" />
        </div>
      </div>
      <div className="w-6/12 bg-black"></div>
    </div>
  );
}
