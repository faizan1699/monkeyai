import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { setAlerts } from '../../../../App';

import Card from '../../../Components/card/Card';
import AddProjectinput from './component/addprojectinput/AddProjectinput';
import ProjectDevelopers from './component/projectdevelopers/ProjectDevelopers';
import ProjectSetTiming from './component/projectdetailsworktime/ProjectSetTiming';
import UploadFile from './component/uploadfile/UploadFile';

const AddProject = () => {

  const navigate = useNavigate();
  const setAlert = useContext(setAlerts);

  const [addproj, setAddProjectData] = useState('');

  const handleAddProject = () => {
    if (addproj.project || addproj.department || addproj.startdate || addproj.priority || addproj.client || addproj.status) {

      const ExistingProjects = JSON.parse(localStorage.getItem(`addnewproject`)) || [];

      ExistingProjects.push({

        project: addproj.project,
        startdate: addproj.startdate,
        enddate: addproj.enddate,
        priority: addproj.priority,
        source: addproj.projectsource,
        type: addproj.projecttype,
        client: addproj.client,
        department: addproj.department,
        logo: addproj.imglogo,
        status: addproj.status,

      });

      localStorage.setItem(`addnewproject`, JSON.stringify(ExistingProjects))
      navigate('/projects/projectlist');

    }
    else {
      setAlert('info', "Pls fill the Input filds");
    }
  }

  return (

    <div className=''>

      <div className='my-3 d-flex justify-content-between'>

        <div className='d-flex '>

          <Link className='nav-link fs-3' to='/projects/projectlist'>
            <i className="fa-solid fa-arrow-left small me-2"></i>
          </Link>
          <h3 className="fw-bold mt-1">
            Add New Project
          </h3>

        </div>

      </div>

      <Card classes='' carddata={
        <>

          <form onSubmit={handleAddProject}>

            <div>
              <AddProjectinput setAddProjectData={setAddProjectData} />
            </div>

            <div>
              <ProjectDevelopers />
            </div>

            <div className='my-2'>
              <ProjectSetTiming />
            </div>

            <div className='my-2'>
              <UploadFile setAddProjectData={setAddProjectData} />
            </div>

          </form>

        </>
      } />
    </div>

  )
}

export default AddProject;