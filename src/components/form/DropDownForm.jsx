import React from 'react'
import {useState} from 'react'
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'

export default function DropDownForm({text}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center h-10">
      <button onClick={() => setIsOpen((prevState)=> !prevState)} 
      className="w-full flex items-center justify-between rounded border border-gray-800 h-10 text-gray-300 p-5">
        {text}
        {/* {!isOpen ? (
          <AiOutlineCaretDown className ="h-8 text-gray-500"/>):(
          <AiOutlineCaretUp className="h-8 text-gray-500"/>
          )} */}
           <AiOutlineCaretDown className ={`h-8 text-gray-500 transition-all duration-100 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      {isOpen && 
        <div className="w-full flex flex-col items-left justify-center bg-blue-50 py-2 my-0">
          <p>سلام</p>
          <p>سلام</p>
        </div>
      }
    </div>
  )
}

