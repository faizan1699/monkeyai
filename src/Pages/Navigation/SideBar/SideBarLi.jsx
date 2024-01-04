import React from 'react';

import { NavLink } from 'react-router-dom';

export default function SideBarLi(props) {
    return (
        <div className='d-flex align-items-center'>

            <li className="nav-item mb-2 w-100" >
                <NavLink className="nav-link ps-2" to={props.data.linkto} >
                 
                    <span className='me-1'>
                        <i className={`fa-solid ${props.data.icon}`}></i>
                    </span>
                 
                    {props.data.linkName}

                </NavLink>
            </li>
        </div>
    )
}
