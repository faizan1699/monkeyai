import React from 'react'

export default function ProjectMercyCards(props) {

    const setBG = {
        background: props.data.bg,
    }

    return (
        <div className="card">

            <div className="card-body d-flex justify-content-between" >

                <div className="">
                    <h5 className='card-title fw-bold m-0'>{props.data.title}</h5>
                    <span className='fw-bold small'>{props.data.description}</span>
                </div>

                <div className='d-flex card_icons '><i className={`${props.data.Icon} p-2 rounded-pill fs-4 text-light d-flex align-items-center justify-content-center`} style={setBG}></i></div>

            </div>
        </div>

    )
}
