import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFile, faCalendar, faLevelUpAlt, faHotTub, faBuilding, faMonument } from '@fortawesome/free-solid-svg-icons';

const AddProjectinput = ({ setAddProjectData }) => {

  const iconUser = <FontAwesomeIcon icon={faUser} />;
  const iconProject = <FontAwesomeIcon icon={faFile} />;
  const iconDate = <FontAwesomeIcon icon={faCalendar} />;
  const iconPrioroty = <FontAwesomeIcon icon={faLevelUpAlt} />;
  const iconHouse = <FontAwesomeIcon icon={faHotTub} />;
  const iconNumber = <FontAwesomeIcon icon={faMonument} />;
  const iconBuilding = <FontAwesomeIcon icon={faBuilding} />;

  const [inputs, setInputs] = useState({
    project: "",
    client: "",
    startdate: "",
    priority: "",
    projectsource: "",
    enddate: "",
    department: "All",
    projecttype: "",
    status: "",
  });

  const handleInputChange = (event) => {

    const { name, value } = event.target;

    setInputs((prevInputs) => ({...prevInputs,[name]: value,}));
    setAddProjectData((prevData) => ({...prevData,[name]: value,}));
  
  }

  return (
    <div className='row '>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label small">Project Title<span className='text-danger fs-6 ms-2'>*</span></label>
          <div className="input-group ">
            <span className="input-group-text  set_icon_bg">{iconProject}</span>
            <input onChange={handleInputChange} value={inputs.project} name='project' type="text" className='form-control rounded-0' placeholder='MonkeyAi_Ai' required />
          </div>
          <div className="invalid-feedback">adfadsfads</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label small">Start Date<span className='text-danger fs-6 ms-2'>*</span></label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconDate}</span>
            <input onChange={handleInputChange} type="date" value={inputs.startdate} name='startdate' className='form-control rounded-0' placeholder='Date' required />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label small">Priority<span className='text-danger fs-6 ms-2'>*</span></label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconPrioroty}</span>
            <select onChange={handleInputChange} value={inputs.priority} name='priority' className="form-select me-1 col rounded-0" required aria-label="Default select example">
              <option defaultValue="select value">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label small">Source Location <span className='small'>(Developer)</span></label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconHouse}</span>
            <select onChange={handleInputChange} value={inputs.projectsource} name='projectsource' className="form-select me-1 col rounded-0" aria-label="Default select example">
              <option defaultValue="In-House">Select Source Location</option>
              <option value="In House">In House</option>
              <option value="Outside">Outside</option>
              <option value="Open Source">Open Source</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label small">Source Location <span className='small'>(Developer)</span></label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconHouse}</span>
            <select onChange={handleInputChange} value={inputs.status} name='status' className="form-select me-1 col rounded-0" aria-label="Default select example">
              <option defaultValue="select your value">Select Source Location</option>
              <option value="in process">In process</option>
              <option value="completed">Completed</option>

            </select>
          </div>
        </div>

      </div>

      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label small">Client Name<span className='text-danger fs-6 ms-2'>*</span></label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconUser}</span>
            <input type="text" onChange={handleInputChange} value={inputs.client} name='client' className='form-control rounded-0' required placeholder='Enter Client Name' />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput6" className="form-label small">End Date<span className='text-danger fs-6 ms-2'>*</span></label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconDate}</span>
            <input type="date" onChange={handleInputChange} value={inputs.enddate} name='enddate' className='form-control rounded-0' required placeholder='End Date' />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput7" className="form-label small">Department<span className='text-danger fs-6 ms-2'>*</span></label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconBuilding}</span>
            <select onChange={handleInputChange} value={inputs.department} name='department' className="form-select me-1" required aria-label="Default select example">
              <option defaultValue="All">Select Department</option>
              <option value="Data Science">All</option>
              <option value="Data Science">Data Science</option>
              <option value="Software Enginering">Software Enginering</option>
              <option value="PMO">PMO</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput8" className="form-label small">Project Type</label>
          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconNumber}</span>
            <select onChange={handleInputChange} value={inputs.projecttype} name='projecttype' className="form-select me-1" aria-label="Default select example">
              <option defaultValue="Large">Select Project Type</option>
              <option value="Large">Large</option>
              <option value="Medium">Medium</option>
              <option value="Small">Small</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProjectinput;