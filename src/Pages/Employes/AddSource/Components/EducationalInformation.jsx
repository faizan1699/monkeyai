import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function EducationalInformation({ setAddEmploye }) {

    const iconDegree = <FontAwesomeIcon icon={faGraduationCap} />;
    const iconInstitute = <FontAwesomeIcon icon={faBuilding} />;

    const [input, setInput] = useState({
        degree: '',
        institute: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setInput((prevData) => ({ ...prevData, [name]: value }));
        setAddEmploye((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='row mb-3'>
            <h5 className=''>Education Information</h5>

            <div className="col-md-6">

                <label htmlFor="degree" className="form-label small">Degree</label>
                <div className="input-group">

                    <span className="input-group-text set_icon_bg">{iconDegree}</span>
                    <select id="degree" name="degree" value={input.degree} onChange={handleInputChange} className="form-select" aria-label="Select Employee Degree">

                        <option value="">Select Employee Degree</option>
                        <option value="Bachelor in Computer Science">Bachelor in Computer Science</option>
                        <option value="Bachelor in Computer Technology">Bachelor in Computer Information Technology</option>
                        <option value="Bachelor in Computer Engineering">Bachelor in Computer Engineering</option>
                        <option value="Bachelor in Software Engineering">Bachelor in Software Engineering</option>

                    </select>

                </div>
            </div>

            <div className="col-md-6">

                <label htmlFor="institute" className="form-label small">Institute</label>
                <div className="input-group">

                    <span  className="input-group-text set_icon_bg">{iconInstitute}</span>

                    <select name='institute' id="institute" value={input.institute} onChange={handleInputChange} className="form-select" aria-label="Select Institute">
                        <option value="">Select Institute</option>
                        <option value="The Islamia University of Bahawalpur">The Islamia University of Bahawalpur</option>
                        <option value="Lums Lahore">Lums Lahore</option>
                        <option value="Qaid-e-Institute of Information Technology">Qaid-e-Institute of Information Technology</option>
                        <option value="Punjab University">Punjab University</option>
                    </select>

                </div>
            </div>
        </div>

    )
} 