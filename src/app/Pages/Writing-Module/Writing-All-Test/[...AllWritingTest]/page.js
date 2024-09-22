import dynamic from 'next/dynamic.js';
import React, { Suspense } from 'react';
import Loader from "@/Helper/Loader";
const Main = dynamic(() => import("../Writing-Importand/Main"), { ssr: false })

export default function page({ params }) {
  let testID = params.AllWritingTest[0]
  // console.log(testID)

  return (
    <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'> {<Loader />}</div>}>
      <Main
        testID={testID}
      />
    </Suspense>

  )
}
