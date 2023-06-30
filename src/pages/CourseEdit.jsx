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
                <h1 className="font-semibold text-xl text-gray-700">افزودن درس جدید</h1>
            </div>
            <div className="w-full flex flex-wrap items-center justify-start">
                <div className="w-4/12 mx-10">
                  <p>درس</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>استاد</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>ظرفیت</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>تاریخ و ساعت برگزاری کلاس</p>
                  <div><Input /></div>
                </div>
                <div className="w-4/12 mx-10 my-8">
                  <p>روز امتحان</p>
                  <div><Input /></div>
                </div>
            </div>
            <div className="w-5/12">
                <SubmitButton text="ثبت تغییرات"/>
            </div>
        </div>
    </Layout>
  )
}
