import React from 'react'
import ArrayChild from './ArrayChild'

function Array() {
    const arr = [
        {
            id: 1, name:"Chris", age :23 , gender:"male"
        },

        {
            id: 2, name :"Raj", age :22, gender:"male"
        },

        {
            id: 3, name :"Sara", age :30, gender:"female"
        },

        {
            id:4, name :"Vicky", age :25, gender:"female"
        }   
    ]

    const arrlist = arr.map(list =>(
        <ArrayChild key={list.id} list={list}/> 
        // key={details.id} to give unique value to array
    ))

    // index list rendering

    const arrindex = ["Chris","Vicky","Sara","Raj","chris"]

    const index = arrindex.map((abc , index) =>
        <h2 key={index}>{abc}</h2>
    )

  return (
    <>
    <div>
      {arrlist}
      {index}
    </div>
    </>
  )
}

export default Array
