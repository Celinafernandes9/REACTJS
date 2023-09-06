import React from "react";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const navigate = useNavigate()
  return (
    <>
      <div class="alert alert-success" role="alert">
        Your order has placed
      </div>
      <button type="button" class="btn btn-info" onClick={() =>navigate(-1)}>
        Previous
      </button>
    </>
  );
};
