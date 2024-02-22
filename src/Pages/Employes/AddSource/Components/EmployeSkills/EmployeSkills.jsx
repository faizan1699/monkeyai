import React, { useState } from 'react';

export default function EmployeSkills(props) {
    const [removeSkill, setRemoveSkill] = useState(true);

    const removeSkills = () => {
        setRemoveSkill(false);
    };

    return (

                <div className='rounded-pill mt-2 ' style={{ background: "#c9c5c5" }}>
                
                    {removeSkill && (
                        <div className='small px-2 py-1 mb-2'>
                            {props.skill}
                            <i onClick={removeSkills} className='fa-solid ps-1 fa-remove'></i>
                        </div>
                    )}
                 
                </div>

    );
}
