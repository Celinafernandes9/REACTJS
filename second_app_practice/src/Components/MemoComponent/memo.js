import React, { Component } from 'react'

function memo({text}) {
    console.log("Memo comp");
  return (
    
    <>
    <div>
      {text}
    </div>
    </>
  )
}
// to avoid rerendering we used memo Component
export default React.memo(memo) 
