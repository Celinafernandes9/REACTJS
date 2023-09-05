import React from "react";
import { Link } from "react-router-dom";
import b1 from "../Image/b1.jpg";
import m1 from "../Image/m1.jpg";
import f1 from "../Image/f1.jpg";

export const Product = () => {
  return (
    <>
      <div className="content mb-4 mt-3 m-5 fw-bold fs-2">Product</div>
      <input type="search" placeholder="Search product" className="m-4" />

      <nav className="nav">
        <Link to="/men" className="m-4 text-decoration-none text-black">
          <img src={m1} alt=" " height={70} width={70} className="rounded-circle m-3" />
          Men
        </Link>

        <Link to="/women" className="m-4 text-decoration-none text-black">
          <img src={f1} alt=" " height={70} width={70} className="rounded-circle m-3" />
          Women
        </Link>
      </nav>

      <section className="banner">
        <img src={b1} alt="banner" height={250} className="w-100" />
      </section>
    </>
  );
};
