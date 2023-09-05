import React from 'react'

import s1 from '../Image/s1.jpg'
import s2 from '../Image/s2.jpg'
import s3 from '../Image/s3.jpg'
import s4 from '../Image/s4.jpg'


export const Men = () => {
  return (
    <>
    <div>Men</div>
    <h1 className="text-center">Men's Clothing</h1>
    <div>
      <img src={s1} alt=''/>
    </div>
    <div>
      <img src={s2} alt=''/>
    </div>
    <div>
      <img src={s3} alt=''/>
    </div>
    <div>
      <img src={s4} alt=''/>
    </div>
    </>
  )
}
