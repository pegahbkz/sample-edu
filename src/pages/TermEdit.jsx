import React , {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios'
import Layout from "../containers/Layout";
import DropDownForm from "../components/form/DropDownForm";
import SubmitButton from "../components/form/SubmitButton";
import AuthService from '../auth/useAuth'

export default function TermEdit () {
    const token = AuthService.getCurrentUser()
    const headers = { 'test': token }
    const userRole = AuthService.getRole()

    const {TermName}  = useParams();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/term/${TermName}` ,  {headers}).then((res)=>{
            console.log(res.data[0].name);
        })
    } , [TermName])

    
    // function handleSave () {
    //     axios.put
    // }

    return(
        <Layout>
        <div className="w-full flex flex-col items-center m-10">
            <div className="w-full flex justify-between px-10 py-5 border-b border-r-gray-600">
                <h1 className="font-semibold text-xl text-gray-700">مشاهده لیست ترم‌ها</h1>
            </div>
            <div className = "w-4/12 mt-10">
                <p>نام ترم</p>
                <div className="w-full flex items-center justify-start rounded border border-gray-800 h-12 text-gray-800 p-5 my-2">
                    {[TermName]}
                </div>
            </div>
            <div className = "w-4/12 mt-10 mb-5">
                <p>لیست اساتید</p>
                <div className="w-full flex items-center justify-between mt-2">
                    <div className="w-8/12">
                        <DropDownForm text="انتخاب استاد"/>
                    </div>
                    <button className="w-16 h-10 px-2  rounded-md text-sm bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white mr-2 ml-1">
                        افزودن
                    </button>
                    <button className="w-32 h-10 px-2 py-2 rounded-md text-sm bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white mx-1">
                        آپلود اکسل
                    </button>
                </div>
            </div>
            <div className = "w-4/12 mt-10">
                <p>لیست دانشجویان</p>
                <div className="w-full flex items-center justify-between mt-2">
                    <div className="w-8/12">
                        <DropDownForm text="انتخاب دانشجو" />
                    </div>
                    <button className="w-16 h-10 px-2  rounded-md text-sm bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white mr-2 ml-1">
                        افزودن
                    </button>
                    <button className="w-32 h-10 px-2 py-2 rounded-md text-sm bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white mx-1">
                        آپلود اکسل
                    </button>
                </div>
            </div>
            <div className="w-4/12 mt-10">
                <SubmitButton text="ذخیره تغییرات" />
            </div>
        </div>
      </Layout>
    )
}