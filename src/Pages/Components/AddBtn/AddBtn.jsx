import React from 'react';

import { Link } from 'react-router-dom';

export default function AddBtn({ routlink , btntitle , iconClass , btnclass , fwicon}) {
  return (
    <Link className={`btn ${btnclass}`} to={routlink} >
      <span className={`me-1 small bg-light rounded-pill fw-bold ${iconClass} `} >
        <i className={`small rounded-pill px-1 ${fwicon}`} ></i>
      </span>
      {btntitle}
    </Link>
  )
}
