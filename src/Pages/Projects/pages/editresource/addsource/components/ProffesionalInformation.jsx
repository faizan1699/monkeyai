import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield , faUserTie , faBuilding , faEnvelope , faIdCard } from '@fortawesome/free-solid-svg-icons';

export default function ProffesionalInformation() {

    const iconId = <FontAwesomeIcon icon={faIdCard} />;
    const iconMail = <FontAwesomeIcon icon={faEnvelope} />;
    const iconDepartment = <FontAwesomeIcon icon={faBuilding} />;
    const iconEmploye = <FontAwesomeIcon icon={faUserTie} />;
    const iconJob = <FontAwesomeIcon icon={faUserShield} />;

    return (
        <div className='row'>
            <h5 className="">Professional Information</h5>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">ID</label>
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconId}</span>
                        <input type="number" className='form-control ' placeholder='10001' />
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Employment Type</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconEmploye}</span>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>ٖSelect Employement Type</option>
                            <option value="1">Full Time</option>
                            <option value="2">InternShip</option>
                            <option value="3">Half Time</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Email</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconMail}</span>
                        <input type="email" className='form-control ' placeholder='ali@gmail.com' />

                    </div>
                </div>
            </div>

            <div className="col-md-6">

                <label htmlFor="exampleFormControlInput1" className="form-label small">Job Title</label>

                <div className="mb-3 d-flex">
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconJob}</span>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Select Job Title</option>
                            <option value="1">Backend Engineer</option>
                            <option value="2">Senior Backend Engineer</option>
                            <option value="3">Junior Backend Engineer</option>
                            <option value="4">Senior Front End Engineer</option>
                            <option value="5">Junior Front End Engineer</option>
                            <option value="6">Senior Full Stack Developer</option>
                            <option value="7">Team Manager</option>
                            <option value="8">CEO</option>
                            <option value="9">None Of These</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Department</label>
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconDepartment}</span>
                        <input type="text" className='form-control ' placeholder='Software Engineering' />

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Date of Joining</label>
                    
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconId}</span>
                        <input type="date" className='form-control ' placeholder='30/12/2023' />
                    </div>

                </div>
            </div>
        </div>
    )
}
