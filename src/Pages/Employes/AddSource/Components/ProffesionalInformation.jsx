import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUserTie, faBuilding, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';

export default function ProffesionalInformation({ setAddEmploye }) {

    const iconId = <FontAwesomeIcon icon={faIdCard} />;
    const iconMail = <FontAwesomeIcon icon={faEnvelope} />;
    const iconDepartment = <FontAwesomeIcon icon={faBuilding} />;
    const iconEmploye = <FontAwesomeIcon icon={faUserTie} />;
    const iconJob = <FontAwesomeIcon icon={faUserShield} />;

    const [input, setInput] = useState({
        id: '',
        employetype: '',
        email: '',
        jobtitle: '',
        department: '',
        joindate: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setInput((data) => ({ ...data, [name]: value }));
        setAddEmploye((data) => ({...data , [name]: value}));
    }

    return (
        <div className='row'>
            <h5 className="">Professional Information</h5>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">ID</label>
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconId}</span>
                        <input type="number" name='id' value={input.id} onChange={handleInputChange} className='form-control ' placeholder='10001' />
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Employment Type</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconEmploye}</span>
                        <select name='employetype'  className="form-select" aria-label="Default select example">
                            <option onChange={handleInputChange} value={input.employetype} defaultValue>ٖSelect Employement Type</option>
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
                        <input type="email" name='email' onChange={handleInputChange} value={input.email} className='form-control ' placeholder='ali@gmail.com' />

                    </div>
                </div>
            </div>

            <div className="col-md-6">

                <label htmlFor="exampleFormControlInput1" className="form-label small">Job Title</label>

                <div className="mb-3 d-flex">
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconJob}</span>
                        <select className="form-select" onChange={handleInputChange} value={input.jobtitle} name='jobtitle' aria-label="Default select example">
                            <option defaultValue>Select Job Title</option>
                            <option value="Backend Engineer">Backend Engineer</option>
                            <option value="Senior Backend Engineer">Senior Backend Engineer</option>
                            <option value="Junior Backend Engineer">Junior Backend Engineer</option>
                            <option value="Senior Front End Engineer">Senior Front End Engineer</option>
                            <option value="Front End Engineer">Front End Engineer</option>
                            <option value="Junior Front End Engineer">Junior Front End Engineer</option>
                            <option value="Senior Full Stack Developer">Senior Full Stack Developer</option>
                            <option value="Team Manager">Team Manager</option>
                            <option value="CEO">CEO</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="HR ">HR</option>
                            <option value="Not Assign">None Of These</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Department</label>
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconDepartment}</span>
                        <input type="text" onChange={handleInputChange} value={input.department} name='department' className='form-control ' placeholder='Software Engineering' />

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput1" className="form-label small">Date of Joining</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconId}</span>
                        <input type="date" onChange={handleInputChange} value={input.joindate} name='joindate' className='form-control ' placeholder='30/12/2023' />
                    </div>

                </div>
            </div>
        </div>
    )
}
