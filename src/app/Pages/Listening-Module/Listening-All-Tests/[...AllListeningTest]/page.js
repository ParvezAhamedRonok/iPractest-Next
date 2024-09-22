import React, { Suspense } from 'react';
import ListeningMain from "./Importants/Main.js"
import Loader from "@/Helper/Loader";

export default function page({ params }) {
  let testName = params.AllListeningTest[0];


  return (
    <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
      {<Loader />}
    </div>}>
      <ListeningMain
        testName={testName}
      />
    </Suspense>

  )
}
