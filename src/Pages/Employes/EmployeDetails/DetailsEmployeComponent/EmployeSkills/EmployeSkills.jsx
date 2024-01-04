import React from 'react';

import EmployeSkillsCard from './EmployeSkillsCard';
import { EmploySkills } from '../../../../../Services/Services';

export default function EmployeSkills() {
  
    return (
        <div className=''>
            <h5 className="card-text">Skill Set</h5>

            <div className='row'>
                {
                    EmploySkills.map((data, Index) => (
                        <div className='col-4' key={Index}>
                            <EmployeSkillsCard data={data} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
