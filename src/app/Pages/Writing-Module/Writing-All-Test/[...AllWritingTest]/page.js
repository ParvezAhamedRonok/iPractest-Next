import React from 'react';
import Main from "../Writing-Importand/Main"


export default function page({ params }) {
  let testID = params.AllWritingTest[0]
  console.log(testID)

  return (
    <div>
      <Main
        testID={testID}
      />
    </div>
  )
}
