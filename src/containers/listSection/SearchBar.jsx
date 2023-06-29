import React, { Component } from 'react';
import Input from '../../components/form/Input';

export default function SearchBar() {
    return (
        <div className="w-full flex py-5 px-10">
          <div className="w-4/12">
          <Input placeholder = "جستجو بر اساس اسم کورس" />
          </div>
          <button className = "px-5">بیشترین تعداد ثبت نامی</button>
          <button className = "px-5">کمترین تعداد ثبت نامی</button>
        </div>
    );
  }