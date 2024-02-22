import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function EducationalInformation({ employedata }) {

    const iconDegree = <FontAwesomeIcon icon={faGraduationCap} />;
    const iconInstitute = <FontAwesomeIcon icon={faBuilding} />;

    const [degree, setDegree] = useState('');
    const [institute, setinstiTute] = useState('');


    useEffect(() => {
        setDegree(employedata.degree);
        setinstiTute(employedata.institute);
    }, [employedata])

    return (

        <div className='row mb-3'>
            <h5 className=''>Education Information</h5>

            <div className="col-md-6">

                <label htmlFor="exampleFormControlInput1" className="form-label small">Institute</label>

                <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconDegree}</span>

                    <select className="form-select" aria-label="Default select example">
                        <option onChange={(e) => setDegree(e.target.value)} defaultValue>{institute ? institute : "Not Found"}</option>
                        <option value="1">Bachelor in Computer Information Technology</option>
                        <option value="2">Bachelor in Computer Engineering</option>
                        <option value="3">Bachelor in Software Engineering</option>
                    </select>

                </div>

            </div>

            <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label small">Education</label>

                <div className="input-group">

                    <span className="input-group-text set_icon_bg">{iconInstitute}</span>

                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>{degree ? degree : "Not Found"}</option>
                        <option value="1">Lums Lahore</option>
                        <option value="2">Qaid-e-Institute of Information Technology</option>
                        <option value="3">Punjab University</option>
                    </select>

                </div>

            </div>
        </div>
    )
}
