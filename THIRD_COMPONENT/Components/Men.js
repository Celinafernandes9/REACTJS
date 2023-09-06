import React from 'react'
import s1 from '../Image/s1.jpg'
import s2 from '../Image/s2.jpg'
import s3 from '../Image/s3.jpg'
import s4 from '../Image/s4.jpg'


export const Men = () => {
  return (
    <>
    <h1 className="text-center">Men's Clothing</h1>
    <div className="pro-container d-flex flex-wrap"></div>
        <div className="border border-dark m-3">
          <img src={s1} alt="" />
        </div>
        <div className="border border-dark m-3">
          <img src={s2} alt="" />
        </div>
        <div className="border border-dark m-3">
          <img src={s3} alt="" />
        </div>
        <div className="border border-dark m-3">
          <img src={s4} alt="" />
        </div>
    </>
  )
}
