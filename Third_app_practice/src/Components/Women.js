import React from 'react'
import sw1 from "../Image/sw1.jpg";
import sw2 from "../Image/sw2.jpg";
import sw3 from "../Image/sw3.jpg";
import sw4 from "../Image/sw4.jpg";

export const Women = () => {
  return (
    <>
    <div>
    <div>Women</div>
    <div className="pro-container d-flex flex-wrap"></div>
    <div className="border border-dark m-3">
    <img src={sw1} alt=" " />
  </div>
  <div className="border border-dark m-3">
    <img src={sw2} alt=" " />
  </div>
  <div className="border border-dark m-3">
    <img src={sw3} alt=" " />
  </div>
  <div className="border border-dark m-3">
    <img src={sw4} alt=" " />
  </div>
  </div>
  </>
  )
}
