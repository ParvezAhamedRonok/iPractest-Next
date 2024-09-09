import React from 'react';
import Main from './Important/Main';


export default function page({ params }) {
  let testName = params.AllReadingTest[0]
  console.log(testName)

  return (
    <div>
      <Main
        testName={testName}
      />
    </div>
  )
}
