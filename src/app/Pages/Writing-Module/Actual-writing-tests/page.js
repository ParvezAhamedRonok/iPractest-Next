import dynamic from 'next/dynamic.js';
import React, { Suspense } from 'react'
import Loader from "@/Helper/Loader";
//client components...
const MainWritingCardPage = dynamic(() => import("./index.jsx"), { ssr: false });



export default function page() {
  return (
    <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'> {<Loader />}</div>}>
      <MainWritingCardPage />
    </Suspense>

  )
}
