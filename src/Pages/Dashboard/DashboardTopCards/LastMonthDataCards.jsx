import React from 'react';

export default function LastMonthDataCards(props) {

  const setBG = {
    background: props.data.bg,
  }

  const setTextColor = {
    color: props.data.textColor,
  }

  return (
    <div className="card ">

      <div className="card-body d-flex justify-content-between">

        <div className="">

          <h5 className='card-title fw-bold small'>{props.data.title}</h5>
          <span className='fw-bold small'>{props.data.Counts}</span>
          <p className='card-text fw-bold small mt-3' style={setTextColor}>{props.data.SincelastMont} <span className='small text-dark'>since last month</span> </p>

        </div>

        <div className='card_icons'>
          <i className={`p-2 ${props.data.Icon} bg-${props.data.bg} 
            rounded-pill fs-3 d-flex justify-content-center
            align-items-center text-light `} style={setBG}>
          </i>
        </div>

      </div>

    </div>
  )
}
