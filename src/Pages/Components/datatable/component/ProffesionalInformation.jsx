import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUserTie, faBuilding, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';

export default function ProffesionalInformation({ employedata }) {


    const [id, setId] = useState('');
    const [mail, setMail] = useState('');
    const [title, setTitle] = useState('');
    const [depart, setDepart] = useState('');
    const [joindate, setJoinDate] = useState('');
    const [employetype, setEmployeType] = useState('');

    const iconId = <FontAwesomeIcon icon={faIdCard} />;
    const iconMail = <FontAwesomeIcon icon={faEnvelope} />;
    const iconDepartment = <FontAwesomeIcon icon={faBuilding} />;
    const iconEmploye = <FontAwesomeIcon icon={faUserTie} />;
    const iconJob = <FontAwesomeIcon icon={faUserShield} />;


    useEffect(() => {
        setId(employedata.id);
        setMail(employedata.email);
        setTitle(employedata.jobtitle);
        setJoinDate(employedata.joindate);
        setDepart(employedata.department);
        setEmployeType(employedata.desigination);
    }, [employedata])

    return (
        <div className='row'>
            <h5 className="">Professional Information</h5>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">ID</label>
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconId}</span>
                        <input onChange={(e) => setId(e.target.value)} type="number" value={id || ''} className='form-control ' placeholder='1000' />
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Employment Type</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconEmploye}</span>
                        <select onChange={(e) => setEmployeType(e.target.value)} className="form-select" aria-label="Default select example">
                            <option defaultValue>ٖ{`Select Employement Type` ? employetype : ""}</option>
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
                        <input type="email" onChange={(e) => setMail(e.target.value)} className='form-control ' value={mail || ''} placeholder='ali@gmail.com' />

                    </div>
                </div>
            </div>

            <div className="col-md-6">

                <label htmlFor="exampleFormControlInput1" className="form-label small">Job Title</label>

                <div className="mb-3 d-flex">
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconJob}</span>
                        <select className="form-select" aria-label="Default select example">
                            <option onChange={(e) => setTitle(e.target.value)} defaultValue>{`Select Job Title` ? title : ""}</option>
                            <option value="Backend Engineer">Backend Engineer</option>
                            <option value="Senior Backend Engineer">Senior Backend Engineer</option>
                            <option value="Junior Backend Engineer">Junior Backend Engineer</option>
                            <option value="Senior Front End Engineer">Senior Front End Engineer</option>
                            <option value="Junior Front End Engineer">Junior Front End Engineer</option>
                            <option value="Senior Full Stack Developer">Senior Full Stack Developer</option>
                            <option value="Team Manager">Team Manager</option>
                            <option value="CEO">CEO</option>
                            <option value="Not Assign">Not Assigned</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label small">Department</label>
                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconDepartment}</span>
                        <input type="text" className='form-control' value={depart || ''} onChange={(e) => setDepart(e.target.value)} placeholder='Software Engineering' />

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput1" className="form-label small">Date of Joining</label>

                    <div className="input-group">
                        <span className="input-group-text set_icon_bg">{iconId}</span>
                        <input type="date" onChange={(e) => setJoinDate(e.target.value)} value={joindate || ''} className='form-control ' placeholder='30/12/2023' />
                    </div>

                </div>
            </div>
        </div>
    )
}
