import React from "react";

import { useNavigate } from "react-router-dom";

import s1 from "../Image/s1.jpg";
import s2 from "../Image/s2.jpg";
import s3 from "../Image/s3.jpg";
import s4 from "../Image/s4.jpg";
import sw1 from "../Image/sw1.jpg";
import sw2 from "../Image/sw2.jpg";
import sw3 from "../Image/sw3.jpg";
import sw4 from "../Image/sw4.jpg";

export const Collection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-4 text-center fw-bold fs-1">Collection</div>
      <div className="pro-container d-flex flex-wrap">
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
        <div className="border border-dark m-3">
          <img src={sw1} alt="" />
        </div>
        <div className="border border-dark m-3">
          <img src={sw2} alt="" />
        </div>
        <div className="border border-dark m-3">
          <img src={sw3} alt="" />
        </div>
        <div className="border border-dark m-3">
          <img src={sw4} alt="" />
        </div>
      </div>
      
      <button type="button"
        className="btn btn-danger text-danger pl-5 m-4 bg-transparent" onClick={()=>navigate("/")}>Go Back To Home Page</button>
   
    </>
  );
};
