import React from 'react';

export default function ProfessionalInformationData(props) {
    return (

        <div className='row'>

            <div className="col-md-6">

                <label htmlFor="">Employment ID</label>
                <div className="card-text mb-2 fw-bold  small">{props.data.employeId}</div>

                <label htmlFor="">Job Title</label>
                <div className="card-text mb-2 fw-bold  small">{props.data.jobtitle}</div>

                <label htmlFor="">Department</label>
                <div className="card-text mb-2 fw-bold  small">{props.data.department}</div>

            </div>

            <div className="col-md-6">

                <label htmlFor="">Employment Type</label>
                <div className="card-text mb-2 fw-bold  small">{props.data.EmployType}</div>

                <label htmlFor="">Location</label>
                <div className="card-text mb-2 fw-bold  small">{props.data.location}</div>

                <label htmlFor="">Date Join</label>
                <div className="card-text mb-2 fw-bold  small">{props.data.Joindata}</div>

            </div>

        </div>
    )
}
