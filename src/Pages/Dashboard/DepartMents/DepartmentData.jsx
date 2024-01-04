import React from 'react';

import Ali from '../../../Common/EmployImage/Ali.jpeg';
import Abubaker from '../../../Common/EmployImage/abubaker.jpeg';

export default function DepartmentData(props) {

    return (

        <div className='row g-0 d-flex justify-content-between my-3 '>

            <div className='col-md-8 col-6'>
                <h5 className='card-title m-0 small'>{props.data.title}</h5>
                <p className='card-text small mb-2 small'>
                    <span>Total Resources : </span>
                    {props.data.resourceNum}</p>
            </div>

            <div className='col-md-4 col-6 d-flex justify-content-end' id='Departments_Img'>
                <img src={Ali} className='img-fluid rounded-pill' alt={`Employee ${props.Index}`} />
                <img src={Abubaker} className='img-fluid rounded-pill ' alt={`Employee ${props.Index}`} />
                <img src={Ali} className='img-fluid rounded-pill' alt={`Employee ${props.Index}`} />
            </div>

        </div>

    )
}
