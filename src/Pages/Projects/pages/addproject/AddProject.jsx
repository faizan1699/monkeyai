import React from 'react';

import { Link } from 'react-router-dom';
import Card from '../../../Components/card/Card';
import AddProjectinput from './component/addprojectinput/AddProjectinput';
import ProjectDevelopers from './component/projectdevelopers/ProjectDevelopers';
import ProjectSetTiming from './component/projectdetailsworktime/ProjectSetTiming';
import UploadFile from './component/uploadfile/UploadFile';

export default function AddProject() {
  return (
    <div className=''>

      <div className='my-3'>
        <Link className='nav-link' to='/projects/projectlist'>
          <h3 className="fw-bold ">
            <i className="fa-solid fa-arrow-left small me-2"></i>
            Add New Project
          </h3>
        </Link>
      </div>

      <Card classes='' carddata={
        <>

          <div>
            <AddProjectinput />
          </div>

          <div>
            <ProjectDevelopers />
          </div>

          <div className='my-2'>
            <ProjectSetTiming />
          </div>

          <div className='my-2'>
            <UploadFile />
          </div>

        </>
      } />
    </div>

  )
}
