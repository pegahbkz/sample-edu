import React , {useState , useEffect} from 'react'
import Input from '../../components/form/Input'
import Layout from '../../containers/Layout'
import DropDownForm from '../../components/form/DropDownForm'
import SubmitButton from '../../components/form/SubmitButton'
import InputSection from '../../components/form/InputSection'
import DropDownSection from '../../components/form/DropDownSection'
import axios from 'axios'
import AuthService from '../../auth/useAuth'
import { useNavigate } from 'react-router-dom';

export default function AddProfessor() {
  const [name , setName] = useState('')
  const [lastName , setLastName] = useState('')
  const [idNumber , setIdnumber] = useState('')
  const [nationalId , setNationalId] = useState('')
  const [department , setDepartment] = useState('')
  const [major , setMajor] = useState('')
  const [year , setYear] = useState('')
  const [degree , setDegree] = useState('')

  const navigate = useNavigate();
  const token = AuthService.getCurrentUser()
  const headers = { 'test': token }
  
  const handleSubmit = () => {
    console.log(headers);
    axios.post(`${process.env.REACT_APP_API_URL}/admin/professor` ,{headers} ).then((res)=>{
      console.log(res.data);
      navigate('/admin/professor')
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex justify-center px-10 py-2 border-b border-r-gray-600">
          <h1 className="font-semibold text-xl text-gray-700">ثبت / تغییر اطلاعات استاد</h1>
            </div>
        <div className="w-full flex flex-wrap items-center justify-center">
            <div className="w-full flex flex-wrap justify-center py-10">
              <InputSection title="نام" onChange={setName}/>
              <InputSection title="نام خانوادگی" onChange={setLastName}/>
              <InputSection title="شماره پرسنلی" onChange={setIdnumber}/>
              <InputSection title="کد ملی" onChange={setNationalId}/>
              <DropDownSection title="دانشکده" api={false} name="department" departmentSelected={null} onChange={setDepartment}/>
              <DropDownSection title="رشته" api={false} name="majors" departmentSelected={department} onChange={setMajor}/>
              <InputSection title="سال ورود" onChange={setYear}/>
              <InputSection title="سطح" onChange={setDegree}/>
            </div>
        </div>
        <div className="w-5/12">
          <SubmitButton onClick={handleSubmit} text="ثبت تغییرات"/>
        </div>
      </div>
        
    </Layout>
  )
}
