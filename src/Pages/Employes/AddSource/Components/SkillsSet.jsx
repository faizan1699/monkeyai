import React, { useState } from 'react';
import EmployeSkills from '../Components/EmployeSkills/EmployeSkills';

export default function SkillsSet() {
  const [currentSkill, setCurrentSkill] = useState('');
  const [skillHistory, setSkillHistory] = useState([]);

  const handleSkillChange = (event) => {

    const selectedSkill = event.target.value;
    setCurrentSkill(selectedSkill);
    setSkillHistory((prevHistory) => [...prevHistory, selectedSkill]);
  
  };

  return (
    <div className="row">
      <div className="col-md-6">

        <h5 className=''>Skill Set</h5>

        <div className="mb-3">

          <label htmlFor="exampleFormControlInput1" className="form-label small">Employment Type</label>

          <select className="form-select" aria-label="Default select example" onChange={handleSkillChange} value={currentSkill}>

            <option defaultValue>Select Your Skills</option>
            <option value="NODE JS">Node Js</option>
            <option value="REACT JS">React JS</option>
            <option value="DJANGO">DJANGO</option>
            <option value="PHP">PHP</option>
            <option value="LARAVEL">LARAVEL</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
            <option value="MERN STACK">MERN STACK</option>
            <option value="MEAN DEVELOPR">MEAN DEVELOPER</option>
            <option value="PYTHON">PYTHON</option>
            <option value="RUBBY ON RAILS">RUBBY ON RAILS</option>
          </select>

          <div className='row'>
            {skillHistory.map((history, Index) => (
              <div className="col-auto" key={Index}>
                <EmployeSkills skill={history} skillHistory={history} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
