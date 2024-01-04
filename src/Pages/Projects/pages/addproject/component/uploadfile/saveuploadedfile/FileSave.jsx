import React from 'react';

import Save from '../../../../../../Components/AddBtn/AddBtn';

export default function FileSave({ fileUrl }) {
    return (

        <div className='d-flex justify-content-center flex-column align-items-center my-3'>

            <div>
                {
                    fileUrl ? (
                        <div className='img-fluid h-100'>
                            <img className='img-fluid' src={fileUrl} alt="not Found" />
                        </div>
                    ) : (
                        <i className="fa-solid fa-file-arrow-up text-secondary opacity-50" style={{ fontSize: "90px" }}></i>
                    )
                }
            </div>

            <div className='mt-3 '>
                <Save  btnclass='btn-dark px-5' iconClass='d-none' btntitle='Save' />
            </div>

        </div>

    )
}
