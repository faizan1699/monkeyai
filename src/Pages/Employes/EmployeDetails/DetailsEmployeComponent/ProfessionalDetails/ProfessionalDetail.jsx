import React from 'react';

export default function ProfessionalDetail({employedata}) {

    return (

        <div className='row'>

            <div className="col-md-6">

                <label htmlFor="">Employment ID</label>
                <div className="card-text mb-2 fw-bold  small">{employedata.id ? employedata.id : "select employe"}</div>

                <label htmlFor="">Job Title</label>
                <div className="card-text mb-2 fw-bold  small">{employedata.jobtitle ? employedata.jobtitle : "missing title"}</div>

                <label htmlFor="">Department</label>
                <div className="card-text mb-2 fw-bold  small">{employedata.department ? employedata.department : "missing department"}</div>

            </div>

            <div className="col-md-6">

                <label htmlFor="">Employment Type</label>
                <div className="card-text mb-2 fw-bold  small">{employedata.employement_type ? employedata.employement_type : "select employe"}</div>

                <label htmlFor="">Location</label>
                <div className="card-text mb-2 fw-bold  small">{employedata.location ? employedata.location : "location"}</div>

                <label htmlFor="">Date Join</label>
                <div className="card-text mb-2 fw-bold  small">{employedata.joindate ? employedata.joindate : "join_data"}</div>

            </div>

        </div>
    )
}
