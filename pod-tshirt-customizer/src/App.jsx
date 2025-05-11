import React from 'react'
import { FormProvider } from 'react-hook-form'
import FormPanel from './Components/FormPanel';
import ImageUpload from './Components/ImageUpload';
import TextPrintBox from './Components/TextPrintBox';
import ThemeSwitcher from './Components/ThemeSwitcher';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


export default function App() {
  const methods=useForm();
  const [themeIndex,setThemeIndex]=useState(0);
  const themes = [
    "bg-white text-black",
    "bg-gray-800 text-white",
    "bg-pink-100 text-indigo-800",
  ];
  return (
    <FormProvider {...methods}>
      <div className={`min-h-screen p-6 ${themes[themeIndex]}`}>
        <ThemeSwitcher setThemeIndex={setThemeIndex} />
        <div className="grid grid-cols-2 gap-6">
          <FormPanel />
          <ImageUpload />
        </div>
        <TextPrintBox />
      </div>
    </FormProvider>
  );
}


