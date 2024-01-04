import React from 'react'

export default function AssignProject() {
    return (
        <div className='card my-2'>
            <div className="card-body ">

                <div className="d-flex align-items-center justify-content-center ">
                    <div className="d-flex justify-content-center flex-column">
                        <div className='text-center'>
                            <i className="fa-solid text-secondary fa-file-invoice " style={{ fontSize: "100px" }}></i>
                        </div>

                        <div className="text-center mt-3">
                            <h5 className="card-text disabled">No Project Assigned</h5>
                            <h6 className="card-text disabled small">Click the assign Button to Assign Project</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
