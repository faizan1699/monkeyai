import React from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import Card from '../../Components/card/Card';

const PersonalInformation = () => {

  const iconUser = <FontAwesomeIcon icon={faUser} />;
  const iconCalender = <FontAwesomeIcon icon={faCalendar} />;

  const navigate = useNavigate();
  const { employeeId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = document.getElementsByName('project')[0].value;
    const employe = document.getElementsByName('employe')[0].value;
    const startdate = document.getElementsByName('startdate')[0].value;
    const endDate = document.getElementsByName('enddate')[0].value;
    const comment = document.getElementsByName('comment')[0].value;
    const assignment = document.getElementsByName('assignment')[0].value;
    const rate = document.getElementsByName('resourcerate')[0].value;


    const existingProjects = JSON.parse(localStorage.getItem(`projectsData_${employeeId}`)) || [];
    existingProjects.push({ project, employe, startdate, endDate, comment, assignment, rate });

    // Store the updated array back in localStorage
    localStorage.setItem(`projectsData_${employeeId}`, JSON.stringify(existingProjects));

    navigate(`/employees/${employeeId}`);
  };

  return (
    <>

      <div className="my-3 d-flex align-items-center">
        <Link className='nav-link' to={`/employees/${employeeId}`} >
          <i className='fa-solid fs-3 me-2 fa-arrow-left'></i>
        </Link>
        <h3 className='fw-bold'>Assign Project</h3>
      </div>

      <Card carddata={
        <>
          <form onSubmit={handleSubmit}>
            <div className='row g-2'>

              <div className="col-md-6">
                <div className="">
                  <label htmlFor="exampleFormControlInput1" className="form-label small">Project</label>

                  <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconUser}</span>
                    <input type="text" id='project' name='project' className='form-control' placeholder="Figma To CODE" />
                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="">
                  <label htmlFor="exampleFormControlInput1" className="form-label small">Employee</label>

                  <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconUser}</span>
                    <input type="text" id='employe' name='employe' className='form-control' placeholder="Asif Ahmad" />
                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="">

                  <label htmlFor="exampleFormControlInput1" className="form-label small">Start Date</label>
                  <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconCalender}</span>
                    <input type="date" id='start' name='startdate' className='form-control' placeholder="" />
                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="">
                  <label htmlFor="exampleFormControlInput1" className="form-label small">End Date</label>

                  <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconCalender}</span>
                    <input type="Date" name='enddate' className='form-control' placeholder="" />
                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="">

                  <label htmlFor="exampleFormControlInput1" className="form-label small">Comment</label>
                  <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconUser}</span>
                    <textarea name="comment" className='form-control' rows='1' placeholder='Enter Comments '></textarea>

                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="">

                  <label htmlFor="exampleFormControlInput1" className="form-label small">Assignment</label>
                  <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconUser}</span>
                    <textarea name="assignment" className='form-control' rows='1' placeholder='Assignment'></textarea>
                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="">

                  <label htmlFor="exampleFormControlInput1" className="form-label small">Resource Rate</label>
                  <div className="input-group">
                    <span className="input-group-text set_icon_bg">{iconUser}</span>
                    <input type="text" name='resourcerate' className='form-control' placeholder="Add Resource Rate" />
                  </div>

                </div>
              </div>

              <div className='d-flex justify-content-end mt-3'>
                <button className='btn btn-success'>save</button>
                {/* <Link className="btn btn-dark px-3" to={`/employees/${employedata.id}`} >Save</Link> */}
              </div>

            </div>
          </form>

        </>
      } />

    </>
  );
}

export default PersonalInformation;