import React, { useEffect, useState } from 'react';

import UserLogo from '../../../Common/EmployImage/Ali.jpeg';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {

    const navigate = useNavigate();

    const [loginemp, setLogedInemp] = useState({});
    const [logoutbtn, setLogoutbtn] = useState(`none`);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        localStorage.removeItem('employeLogindata');
        navigate('/login');
    }

    const handleLogoClick = () => {
        if (logoutbtn === 'none') {
            setLogoutbtn(`block`);
        }
        else {
            setLogoutbtn(`none`);
        }
    }

    useEffect(() => {

        const getEmploy = localStorage.getItem('employeLogindata');
        const employee = JSON.parse(getEmploy);
        setLogedInemp(employee);

    } , [])

    return (

        <div className="d-flex mx-md-2 " >

            <div className="d-flex align-items-center me-1 text-secondary">
                <i className="fs-5 fa-solid fa-bell"></i>
                <span className="translate-middle badge rounded-pill p-1 bg-danger">
                    4+
                </span>
            </div>

            <div className="d-flex flex-row align-items-center">

                <div className='me-md-2'>
                    <div className='fw-bold text-secondary'>{loginemp.employename ? loginemp.employename : "Name"}</div>
                    <div className='small text-secondary'>{loginemp.desigination ? loginemp.desigination : "Desigination"}</div>
                </div>

                <div className='rounded-pill ' >
                    <img src={UserLogo} onClick={handleLogoClick} className='img-fluid rounded-pill Nav_UserAccount_Img' style={{ maxWidth: "50px" }} alt="User Img Not Found" />
                </div>

                <div className={`d-${logoutbtn}`}>
                    <button className='btn btn-danger btn-sm' onClick={handleLogout}>Logout</button>
                </div>

            </div>
        </div>
    )
}

export default UserAccount
