import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);
  
  const useDocTitle = title =>{
  useEffect(() => {
    document.title = title;
  } , [title])
}

useDocTitle(`${count} times you clicked`)
  return ( 
    <>
      <div>
        <p>{count} times you clicked on button</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    </>
  );
}

export default Count;
