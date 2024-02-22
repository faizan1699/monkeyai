import React from 'react';

export default function Card({carddata , classes , bodyClasses}) {
  return (
    <div className={`card mb-2 ${classes} `} >
      <div className={`card-body ${bodyClasses}`}>
        {carddata}
      </div>
    </div>
  )
}
