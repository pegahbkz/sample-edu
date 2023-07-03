import React from 'react'
import Input from './Input'

export default function InputSection({title , onChange}) {
  return (
    <div className="w-5/12 mx-2 mb-8">
        <p>{title}</p>
        <div><Input onChange={onChange} />
    </div>
</div>
  )
}
