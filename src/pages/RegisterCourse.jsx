import React , {useEffect , useState} from "react";
import Layout from "../containers/Layout";
import ListItems from "../containers/listSection/ListItems";
import SearchBar from "../containers/listSection/SearchBar";
import MenuItems from "../containers/menuSection/MenuItems";
import axios from 'axios'
import AuthService from '../auth/useAuth'

export default function RegisterCourse() {
  const [terms , setTerms] = useState([])
  const [role , setRole] = useState(null)

  const token = AuthService.getCurrentUser()
  const headers = { 'test': token }
  const userRole = AuthService.getRole()

//   useEffect(()=>{

//     axios.get(`${process.env.REACT_APP_API_URL}/terms` , {headers}).then((res)=>{
//       setTerms(res.data)
//     })

//     userRole && setRole(setRole)

//   } , [])

  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between px-10 py-5 border-b border-r-gray-600">
          <h1 className="font-semibold text-xl text-gray-700">مشاهده لیست ترم‌ها</h1>
        </div>
        <ListItems terms={terms} itemToAbsolutePath={`/terms/info`}/>
      </div>
    </Layout>
  );
}
