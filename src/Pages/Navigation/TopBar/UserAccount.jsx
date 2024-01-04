import React from 'react';

import UserLogo from '../../../Common/EmployImage/Ali.jpeg';


export default function UserAccount() {

    return (

        <div className="d-flex mx-md-2 " >

            <div className="d-flex align-items-center me-1 text-secondary">
                <i className="fs-5 fa-solid fa-bell"></i>
                <span className="translate-middle badge rounded-pill p-1 bg-danger">
                    4+
                </span>
            </div>
            
            <div className="d-flex flex-row">

                <div className='me-md-2'>
                    <div className='fw-bold text-secondary'>Arsan Ihsan</div>
                    <div className='small text-secondary'>Vice President</div>
                </div>

                <div className='rounded-pill '>
                    <img src={UserLogo} className='img-fluid rounded-pill Nav_UserAccount_Img' style={{ maxWidth: "50px" }} alt="User Img Not Found" />
                </div>
            </div>
        </div>
    )
}
