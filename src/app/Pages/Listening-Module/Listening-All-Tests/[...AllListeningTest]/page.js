import React from 'react';
import ListeningMain from "./Importants/Main.js"

export default function page({ params }) {
  let testName = params.AllListeningTest[0];


  return (
    <div>
      <ListeningMain
        testName={testName}
      />
    </div>
  )
}
