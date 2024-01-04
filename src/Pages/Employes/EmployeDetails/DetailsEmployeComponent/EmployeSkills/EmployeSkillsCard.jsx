import React, { useState } from 'react';

export default function EmployeSkillsCard(props) {

    const [removeskill, setRemoveSkill] = useState(true);

    const RemoveSkills = () => {
        setRemoveSkill(false);
    }

    return (
        <>
            <div className='rounded-pill ' style={{ background: "#c9c5c5" }}>
                {
                    removeskill && <p className='small d-flex align-items-center justify-content-center'>{props.data.skill}
                        <i onClick={RemoveSkills} className='fa-solid ps-1 fa-remove'></i>
                    </p>
                }
            </div>

        </>

    )
}
