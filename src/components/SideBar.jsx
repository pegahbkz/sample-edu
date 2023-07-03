import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/useAuth";

export default function SideBar() {
  const [role , setRole] = useState(null)
  const userRole = AuthService.getRole()

  useEffect(()=>{
    userRole && setRole(userRole)
  } , [])

  return (
    <div className="w-2/12  bg-gray-400 h-screen">
      <div className="w-full flex flex-col items-center justify-start px-3 py-10 text-xl">
        {role === 'professor' &&  <div><Link to={`/terms`} ><h3>مشاهده لیست ترم‌ها</h3></Link></div>}
        {role === 'manager' &&  
        <div className="mx-20"> 
        <Link to={`/terms`} ><h3>مشاهده لیست ترم‌ها</h3></Link>
        <Link to={`/students`} ><h3>مشاهده لیست دانشجویان</h3></Link>
        <Link to={`/professors`} ><h3>مشاهده لیست اساتید</h3></Link>
        <Link to={`/menu`} ><h3>ثبت‌نام‌ها</h3></Link></div>}
        {role === 'admin' &&  
        <div className="mx-20"> 
        <Link to={`/terms`} ><h3>مشاهده لیست ترم‌ها</h3></Link>
        <Link to={`/students`} ><h3>مشاهده لیست دانشجویان</h3></Link>
        <Link to={`/professors`} ><h3>مشاهده لیست اساتید</h3></Link>
        <Link to={`/menu`} ><h3>ثبت‌نام‌ها</h3></Link></div>}
      </div>
    </div>
  );
}
