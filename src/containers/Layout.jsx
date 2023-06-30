import React , {useEffect} from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

export default function Layout(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const navigate = useNavigate();

  useEffect(()=>{
    !cookies.auth && navigate('/login')
  } , [])

  return (
    <div className="w-full flex flex-row pt-16 pr-2/12 rtl-grid">
      <NavBar />
      <SideBar />
      <div className="w-10/12 bg-white p-5">{props.children}</div>
    </div>
  );
}
