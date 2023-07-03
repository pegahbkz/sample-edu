import React , {useEffect , useState} from "react";
import Layout from "../containers/Layout";
import {useParams} from "react-router-dom";
import ListItems from "../containers/listSection/ListItems";
import SearchBar from "../containers/listSection/SearchBar";
import MenuItems from "../containers/menuSection/MenuItems";
import axios from 'axios'
import AuthService from '../auth/useAuth'

export default function TermInfo() {
    const [terms , setTerms] = useState([])
    const [role , setRole] = useState(null)
    const {TermName}  = useParams();

  const token = AuthService.getCurrentUser()
  const headers = { 'test': token }
  const userRole = AuthService.getRole()

    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_API_URL}/term/${TermName}/preregistration_courses` , {headers}).then((res)=>{
          
          const course = res.data.map((el)=> {return el.course})
          console.log("teerm/info/" ,course);
          setTerms(course)
        }).catch((err)=>{
            console.log(err);
        })
    
        userRole && setRole(setRole)
    
      } , [])
  return (
    <Layout>
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between px-10 py-5 border-b border-r-gray-600">
        <div className="font-semibold text-xl text-gray-700 flex"> 
            <span className="mx-0.5">دروس</span>
            <span className="mx-0.5">{terms.name}</span>
        </div>
      </div>
      <SearchBar placeholder="جستجو بر اساس اسم درس" />
      {terms && <ListItems terms={terms} action={false} itemToAbsolutePath={`/terms/info/${TermName}`}/>}
    </div>
  </Layout>
  )
}
