import React , {useState , useEffect} from 'react'
import Input from '../components/form/Input'
import Layout from '../containers/Layout'
import DropDownForm from '../components/form/DropDownForm'
import SubmitButton from '../components/form/SubmitButton'
import InputSection from '../components/form/InputSection'
import DropDownSection from '../components/form/DropDownSection'
import AuthService from '../auth/useAuth'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



export default function CourseEdit() {
  const [name , setName] = useState('')
  const [professor , setProfessor] = useState('')
  const [capacity , setCapacity] = useState('')
  const [classTime , setClassTime] = useState('')
  const [examTime , setExamTime] = useState('')

  const navigate = useNavigate();
  const token = AuthService.getCurrentUser()
  const headers = { 'test': token }
  
  const handleSubmit = () => {
    console.log(headers);
    axios.post(`${process.env.REACT_APP_API_URL}/admin/course` ,{headers} ).then((res)=>{
      console.log(res.data);
      navigate('/admin/course')
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
              <InputSection title="درس" onChange={setName}/>
              <InputSection title="استاد" onChange={setProfessor}/>
              <InputSection title="ظرفیت" onChange={setCapacity}/>
              <InputSection title="تاریخ و ساعت برگزاری" onChange={setClassTime}/>
              <InputSection title="روز امتحان" onChange={setExamTime}/>
            </div>
        </div>
        <div className="w-5/12">
          <SubmitButton onClick={handleSubmit} text="ثبت تغییرات"/>
        </div>
      </div>




      <div className="flex flex-col items-center justify-center">
            <div className="w-full flex justify-center px-10 py-2 border-b border-r-gray-600">
                <h1 className="font-semibold text-xl text-gray-700">افزودن درس جدید</h1>
            </div>
            <div className="w-full flex flex-wrap items-center justify-start">
                <div className="w-4/12 mx-10">
                  <p>درس</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>استاد</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>ظرفیت</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>تاریخ و ساعت برگزاری کلاس</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>روز امتحان</p>
                  <div><Input /></div>
                </div>
            </div>
            <div className="w-5/12">
                <SubmitButton text="ثبت تغییرات"/>
            </div>
        </div>
    </Layout>
  )
}
