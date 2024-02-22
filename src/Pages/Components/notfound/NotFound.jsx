import React from 'react'

export default function NotFound() {

    return (

        <div className='d-flex w-100 justify-content-center '>
            <div className="d-flex flex-column">

                <div className='ps-4'>
                    <i className="fa-solid fa-sheet-plastic text-secondary" style={{ fontSize: "10rem" }}></i>
                </div>

                <div className='mt-4'>
                    <h5 className='fw-bold text-danger font-monospace text-decoration-underline'>Projects Not Found</h5>
                </div>
            
            </div>

        </div>

    )

}
