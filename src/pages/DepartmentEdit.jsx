import React , {useEffect , useState} from "react";
import Input from '../components/form/Input'
import Layout from '../containers/Layout'
import DropDownForm from "../components/form/DropDownForm";
import SubmitButton from '../components/form/SubmitButton'
import AuthService from "../auth/useAuth";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import InputSection from "../components/form/InputSection";
import DropDownSection from "../components/form/DropDownSection";

export default function DepartmentEdit() {
  const [name , setName] = useState('')
  const [course , setCourses] = useState('')

  const navigate = useNavigate();
  const token = AuthService.getCurrentUser()
  const headers = { 'test': token }
  
  const handleSubmit = () => {
    console.log(headers);
    axios.post(`${process.env.REACT_APP_API_URL}/admin/department` ,{headers} ).then((res)=>{
      console.log(res.data);
      navigate('/admin/department')
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (

    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex justify-center px-10 py-2 border-b border-r-gray-600">
          <h1 className="font-semibold text-xl text-gray-700">ثبت / تغییر اطلاعات دانشجو</h1>
            </div>
        <div className="w-full flex flex-wrap items-center justify-center">
            <div className="w-full flex flex-wrap justify-center py-10">
              <InputSection title="نام" onChange={setName}/>
              <InputSection title="رشته‌ها" onChange={setCourses}/>
            </div>
        </div>
        <div className="w-5/12">
          <SubmitButton onClick={handleSubmit} text="ثبت تغییرات"/>
        </div>
      </div>
    </Layout>
  )
}
