import React from 'react'
import Input from '../components/form/Input'
import Layout from '../containers/Layout'
import DropDownForm from '../components/form/DropDownForm'
import SubmitButton from '../components/form/SubmitButton'

export default function UserEdit() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex justify-center px-10 py-2 border-b border-r-gray-600">
          <h1 className="font-semibold text-xl text-gray-700">ثبت / تغییر اطلاعات معاون آموزشی</h1>
            </div>
        <div className="w-full flex flex-wrap items-center justify-center">
            <div className="w-5/12 ml-10">
              <div className="m-10">
                  <p>نام</p>
                  <div><Input /></div>
              </div>
              <div className="m-10">
                  <p>نام خانوادگی</p>
                  <div><Input /></div>
              </div>
              <div className="m-10">
                  <p>شماره پرسنلی</p>
                  <div><Input /></div>
              </div>
              <div className="m-10">
                  <p>کد ملی</p>
                  <div><Input /></div>
              </div>
            </div>
            <div className="w-5/12">
              <div className="mx-10">
                  <p>دانشکده</p>
                  <div><DropDownForm /></div>
              </div>
              <div className="mx-10">
                  <p>کد ملی</p>
                  <div><DropDownForm /></div>
              </div>
              <div className="mx-10">
                  <p>سال ورود</p>
                  <div><Input /></div>
              </div>
              <div className="mx-10">
                  <p>سطح</p>
                  <div><Input /></div>
              </div>
            </div>
        </div>
        <div className="w-5/12">
          <SubmitButton text="ثبت تغییرات"/>
        </div>
      </div>
        
    </Layout>
  )
}
