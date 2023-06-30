import React, { useEffect, useState } from "react";
import Input from "../components/form/Input";
import SubmitButton from "../components/form/SubmitButton";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const navigate = useNavigate();

  useEffect(()=>{
    cookies.auth && navigate('/terms')
  } , [])

  function handleLogin () {
    axios.post(`${process.env.REACT_APP_API_URL}/login` , {
      "ID" : userName,
      "password" : password
    }).then((res)=>{
      setCookie("auth" ,res.data.token)
      navigate('/terms')
    })
  }

  return (
    <div className="w-full flex h-screen">
      <div className="w-6/12 bg-white flex items-center justify-center">
        <div className="w-6/12 px-3">
          <Input placeholder="Username" onChange={setUserName}/>
          <Input placeholder="Password" onChange={setPassword} />
          <SubmitButton text="Login" onClick={handleLogin}/>
        </div>
      </div>
      <div className="w-6/12 bg-black"></div>
    </div>
  );
}
