import React from 'react'

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

export default React.memo(memo) 
