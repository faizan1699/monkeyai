import React, { useState } from 'react';

const EmployeSkillsCard = ({ employedata }) => {

    const [hideSkills, setHideSkills] = useState([]);

    if (!employedata || !employedata.skill) {
        return null;
    }

    const handleDeleteSkill = (index) => {
        setHideSkills((prevHiddenSkills) => [...prevHiddenSkills, index]);
    }

    return (
        <div className='row g-0'>

            <h5 className='fw-bold '>Skill</h5>

            {employedata.skill.map((skill, index) => (

                !hideSkills.includes(index) && (

                    <div className='d-flex align-items-center col-auto small  bg-dark text-dark f rounded-pill bg-opacity-25 me-2 px-2 mb-2' key={index} onClick={() => handleDeleteSkill(index)}>

                        {skill}

                        <span className='ms-2 bg-dark px-1 text-light small rounded-pill'>
                            <i className='fa-solid fa-multiply'></i>
                        </span>

                    </div>
                )
            ))}
        </div>
    );
};

export default EmployeSkillsCard;
