import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import Loader from "@/Helper/Loader";

//client components....
const Main = dynamic(() => import('./Important/Main'), { ssr: false });


export default function page({ params }) {
  let testName = params.AllReadingTest[0]
  console.log(testName)

  return (
    <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'> {<Loader />}</div>}>
      <Main
        testName={testName}
      />
    </Suspense>

  )
}
