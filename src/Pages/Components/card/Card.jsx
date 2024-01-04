import React from 'react';

export default function Card({carddata , classes}) {
  return (
    <div className={`card mb-2 ${classes} `} >
      <div className="card-body ">
        {carddata}
      </div>
    </div>
  )
}
