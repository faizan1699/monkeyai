import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFile , faCalendar , faLevelUpAlt , faHotTub , faBuilding , faMonument } from '@fortawesome/free-solid-svg-icons';
// faMobile, faCalendar, faAddressCard, faGlobe, faIdCard}
export default function AddProjectinput() {

  const iconUser = <FontAwesomeIcon icon={faUser} />;
  const iconProject = <FontAwesomeIcon icon={faFile} />;
  const iconDate = <FontAwesomeIcon icon={faCalendar } />;
  const iconPrioroty = <FontAwesomeIcon icon={faLevelUpAlt } />;
  const iconHouse = <FontAwesomeIcon icon={faHotTub } />;
  const iconNumber = <FontAwesomeIcon icon={faMonument } />;
  const iconBuilding = <FontAwesomeIcon icon={faBuilding } />;

  return (
    <div className='row'>

      <div className="col-md-6">

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label small">Project Title</label>

          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconProject}</span>
            <input type="text" className='form-control rounded-0' placeholder='MonkeyAi_Ai' />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label small">Start Date</label>

          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconDate}</span>
            <input type="date" className='form-control rounded-0' placeholder='Date' />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label small">Priority</label>

          <div className="input-group">
            
            <span className="input-group-text set_icon_bg">{iconPrioroty}</span>
            <select className="form-select me-1 col rounded-0" aria-label="Default select example">
              <option defaultValue>High</option>
              <option value="1">Medium</option>
            </select>

          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label small">Project Code</label>

          <div className="input-group">
            
            <span className="input-group-text set_icon_bg">{iconHouse}</span>
            <select className="form-select me-1 col rounded-0" aria-label="Default select example">
              <option defaultValue>In-House</option>
              <option value="1">Outside</option>
              <option value="2">Open Source</option>
            </select>

          </div>
        </div>

      </div>

      <div className="col-md-6">

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label small">Client Name</label>

          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconUser}</span>
            <input type="text" className='form-control rounded-0' placeholder='Enter Client Name' />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput6" className="form-label small">End Date</label>

          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconDate}</span>
            <input type="date" className='form-control rounded-0' placeholder='End Date' />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput7" className="form-label small">Department</label>

          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconBuilding}</span>
            <select className="form-select me-1" aria-label="Default select example">
              <option defaultValue>All</option>
              <option value="1">Medium</option>
              <option value="2">Software Enginering</option>
              <option value="3">PMO</option>
              <option value="4">Data Science</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput8" className="form-label small">Mobile Number</label>

          <div className="input-group">
            <span className="input-group-text set_icon_bg">{iconNumber}</span>
            <select className="form-select me-1" aria-label="Default select example">
              <option defaultValue>Large</option>
              <option value="1">Medium</option>
              <option value="1">Small</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  )
}
