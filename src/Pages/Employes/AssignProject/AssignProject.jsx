import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Card from '../../Components/card/Card';

export default function PersonalInformation() {

  const iconUser = <FontAwesomeIcon icon={faUser} />;
  const iconCalender = <FontAwesomeIcon icon={faCalendar} />;

  return (
    <>

      <div className="my-3">
        <Link className='nav-link' to='/employees/employdetails' ><h3 className='fw-bold'><i className='fa-solid small fa-arrow-left'></i> Assign Project </h3></Link>
      </div>

      <Card carddata={
        <>
          <div className='row g-2'>

            <div className="col-md-6">
              <div className="">
                <label htmlFor="exampleFormControlInput1" className="form-label small">Project</label>
               
                <div className="input-group">
                  <span className="input-group-text set_icon_bg">{iconUser}</span>
                  <input type="text" className='form-control' placeholder="Figma To CODE" />
                </div>
              
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
                <label htmlFor="exampleFormControlInput1" className="form-label small">Employee</label>
              
                <div className="input-group">
                  <span className="input-group-text set_icon_bg">{iconUser}</span>
                  <input type="text" className='form-control' placeholder="Asif Ahmad" />
                </div>
             
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
              
                <label htmlFor="exampleFormControlInput1" className="form-label small">Start Date</label>
                <div className="input-group">
                  <span className="input-group-text set_icon_bg">{iconCalender}</span>
                  <input type="date" className='form-control' placeholder="" />
                </div>
              
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
                <label htmlFor="exampleFormControlInput1" className="form-label small">End Date</label>
               
                <div className="input-group">
                  <span className="input-group-text set_icon_bg">{iconCalender}</span>
                  <input type="Date" className='form-control' placeholder="" />
                </div>
              
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
               
                <label htmlFor="exampleFormControlInput1" className="form-label small">Comment</label>
                <div className="input-group">
                  <span className="input-group-text set_icon_bg">{iconUser}</span>
                  <input type="text" className='form-control' placeholder='Add Your Comments Here' />
                </div>
              
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
               
                <label htmlFor="exampleFormControlInput1" className="form-label small">Assignment</label>
                <div className="input-group">
                  <span className="input-group-text set_icon_bg">{iconUser}</span>
                  <input type="text" className='form-control' placeholder="Add Assignment Details" />
                </div>
             
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
              
                <label htmlFor="exampleFormControlInput1" className="form-label small">Resource Rate</label>
                <div className="input-group">
                  <span className="input-group-text set_icon_bg">{iconUser}</span>
                  <input type="text" className='form-control' placeholder="Add Assignment Details" />
                </div>
              
              </div>
            </div>


          </div>

          <div className='d-flex justify-content-end'>
            <Link className="btn btn-dark px-3" to='/employees/employdetails' >Save</Link>
          </div>

        </>
      } />

    </>
  );
}
