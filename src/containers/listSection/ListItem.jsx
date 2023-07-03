import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import AuthService from '../../auth/useAuth'

export default function ListItem({term , action , itemToAbsolutePath}) {
  const [role , setRole] = useState(null)
  const userRole = AuthService.getRole()

  useEffect(()=>{

    console.log("term" , term);
    userRole && setRole(userRole)
  } , [])

  return (
    <div className="w-5/12 bg-gray-200 rounded-md px-4 py-6 border border-gray-300 flex items-center justify-between mx-10 my-2">
      <Link to={`${itemToAbsolutePath}/${term.name}`} >
        <h4 className="font-medium text-xl underline hover:cursor-pointer hover:text-blue-600">{term.name ? term.name : 'نام درس'}</h4>
      </Link>
      {action && role === 'manager' && <div className="flex">
        <Link to={`/terms/edit/${term.name}`} >
          <button className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white mx-1">
            ویرایش
          </button>
        </Link>
        {/* add link to delete term */}
        <button className="px-5 py-2 rounded-md bg-blue-400 hover:bg-blue-300 hover:cursor-pointer text-white mx-1">
          حذف
        </button>
      </div>}
    </div>
  );
}
