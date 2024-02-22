import React from 'react';

import { Link } from 'react-router-dom';

const AddBtn = ({ btnRef, routlink, btntitle, iconClass, btnclass, fwicon, handleClick }) => {

  return (
    <Link ref={btnRef} className={`btn ${btnclass}`} to={routlink} onClick={handleClick}  >
      <span className={`me-1 small bg-light rounded-pill fw-bold ${iconClass} `} >
        <i className={`small rounded-pill px-1 ${fwicon}`} ></i>
      </span>
      {btntitle}
    </Link>
  )
}

export default AddBtn;
