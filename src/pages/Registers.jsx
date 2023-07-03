import React , {useEffect , useState} from "react";
import Layout from "../containers/Layout";
import ListItems from "../containers/listSection/ListItems";
import SearchBar from "../containers/listSection/SearchBar";
import MenuItems from "../containers/menuSection/MenuItems";
import axios from 'axios'
import AuthService from '../auth/useAuth'

export default function Registers() {
  const [terms , setTerms] = useState([])
  const [role , setRole] = useState(null)

  const token = AuthService.getCurrentUser()
  const headers = { 'test': token }
  const userRole = AuthService.getRole()

  useEffect(()=>{

    axios.get(`${process.env.REACT_APP_API_URL}/terms` , {headers}).then((res)=>{
      setTerms(res.data)
    })

    userRole && setRole(setRole)

  } , [])

  return (
    <Layout>
        <div><MenuItems /></div>
    </Layout>
  );
}
