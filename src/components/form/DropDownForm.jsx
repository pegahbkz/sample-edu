import React , {useEffect} from 'react'
import {useState} from 'react'
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'

const department = [
  {name:"برق"},
  {name:"مکانیک"},
  {name:"کامپیوتر"},
  {name:"عمران"},
  {name:"ادبیات"},
  {name:"الهیات"},
]

const majors = [
  {
    department: "برق",
    name: "مهندسی برق و الکترونیک",
    id:"001"
  },
  {
    department: "برق",
    name: "الکترونیک صنعتی",
    id:"002"
  },
  {
    department: "مکانیک",
    name: "فیزیک",
    id:"003"
  },
  {
    department: "مکانیک",
    name: "سیالات",
    id:"004"
  },
  {
    department: "مکانیک",
    name: "ترمودینامیک",
    id:"005"
  },
  {
    department: "کامپیوتر",
    name: "IT",
    id:"006"
  },
  {
    department: "کامپیوتر",
    name: "سخت افزار",
    id:"007"
  },
  {
    department: "کامپیوتر",
    name: "هوش مصنوعی",
    id:"008"
  },
  {
    department: "کامپیوتر",
    name: "سیستم عامل",
    id:"009"
  },
  {
    department: "عمران",
    name: "ساخت و ساز",
    id:"010"
  },
  {
    department: "ادبیات",
    name: "ادبیات روسی",
    id:"011"
  },
  {
    department: "الهیات",
    name: "معارف اسلامی",
    id:"012"
  },
  {
    department: "کامپیوتر",
    name: "نرم افزار",
    id:"013"
  }
]

export default function DropDownForm({api=false , name , departmentSelected , onChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected , setSelected ] = useState(null)
  const [data , setData] = useState([])

  const handleClick = (item) => {
    setSelected(item.name)
    setIsOpen(false)
    onChange(item.name)
  }


  useEffect(()=>{
    if (!api && name === 'majors' && departmentSelected) {
      const _data = majors.filter((el) => el.department === departmentSelected).map((item) => item);
      setData(_data)
    } else if (!api && name === 'department') {
      setData(department)
    } else {
      setData([])
    }
  } , [departmentSelected])

  return (
    <div className="flex flex-col items-center h-10 mb-4">
      <button onClick={() => setIsOpen((prevState)=> !prevState)} 
      className="w-full flex items-center justify-start rounded border border-gray-800 h-12 text-gray-600 p-5 my-2">
           <AiOutlineCaretDown className ={`h-10 my-2 text-gray-500 transition-all duration-100 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>

           <div className='mr-4'>{selected ? selected : 'انتخاب کنید'}</div>
      </button>
      {isOpen && 
        <div className="w-full flex flex-col border border-gray-400 z-10 bg-white">
          {data && data.length > 0 && data.map((item)=><span className="w-full py-2 px-4 hover:bg-gray-100 hover:cursor-pointer" onClick={()=>handleClick(item)}>{item.name}</span>)}
        </div>
      }
    </div>
  )
}

