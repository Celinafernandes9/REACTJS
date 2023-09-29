import React from 'react'

function Childcomp(props) {
  return (
    <div>
      <button onClick={props.parentone('Full Stack Developer')}>CLICK</button>
    </div>
  )
}

export default Childcomp



