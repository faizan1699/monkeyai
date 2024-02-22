import React from 'react';

import Ali from '../../../Common/EmployImage/Ali.jpeg';
import Abubaker from '../../../Common/EmployImage/abubaker.jpeg';

const DepartmentData = (props) => {

    return (

        <div className='row mt-4 '>

            <div className='col-md-8 col-6'>
                <h5 className='card-title m-0 small'>{props.data.department ? props.data.department : 'Data Not Found'}</h5>
                <p className='card-text small mb-2 small'>
                    <span>Total Resources : </span>
                    12...</p>
            </div>

            <div className='col-md-4 col-6 d-flex justify-content-end' id='Departments_Img'>
                <img src={Ali} className='img-fluid rounded-pill' alt={`Employee ${props.Index}`} />
                <img src={Abubaker} className='img-fluid rounded-pill ' alt={`Employee ${props.Index}`} />
                <img src={Ali} className='img-fluid rounded-pill' alt={`Employee ${props.Index}`} />
            </div>

        </div>
    )
}

export default DepartmentData