import React from 'react'
import DropDownForm from './DropDownForm'

export default function DropDownSection({title , api , name , departmentSelected , onChange}) {
  return (
    <div className="w-5/12 mx-2 mb-8">
        <p>{title}</p>
        <div><DropDownForm api={api} name={name} departmentSelected={departmentSelected} onChange={onChange} /></div>
    </div>
  )
}
