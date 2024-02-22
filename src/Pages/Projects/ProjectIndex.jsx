import React, { useState , useEffect } from 'react';

import DepartmentData from './Components/DepartMents/DepartMents';
import DeveloperList from './Components/DevelopersList/DeveloperList';
import ProjectMercyIdpTopCard from './Components/ProjectMercyTopCards/ProjectMercyIdpTopCard';
import ResourcesTitles from './Components/ResourcesTitles/ResourcesTitles';

import AddBtn from '../Components/AddBtn/AddBtn';
import EmployeLocation from '../Components/employelocation/EmployeLocation';

const ProjectsIndex = () => {

  const [isemploye, setisEmploye] = useState([]);

  useEffect(() => {

    const getEmploye = localStorage.getItem(`Employes`);
    const employees = JSON.parse(getEmploye);

    setisEmploye(employees);

  }, [])

  return (

    <div className=''>
      <div className='row g-0'>

        <div className=''>
          <div className="row m-0">
            <div className=" d-sm-column d-flex justify-content-between">

              <h3 className='my-3 fw-bold'>Mercy-IDP Details</h3>

              <div className='d-flex align-items-center'>

                <div className='me-2'>
                  <AddBtn btnclass='px-3 btn-light border-1 border-dark' iconClass='' fwicon='fa-solid fa-pen bg-light ' btntitle='Edit Source' routlink='' />
                </div>

                <div className=''>
                  <AddBtn btnclass='px-3 btn-dark' fwicon='fa-solid text-dark bg-light  fa-add' btntitle='Project List' routlink='projectlist' />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="">
        <ProjectMercyIdpTopCard />
      </div>

      <div className="row g-2 mt-2">

        <div className="col-md-8">
          <EmployeLocation />
        </div>

        <div className="col-md-4">
          <DepartmentData />
        </div>

        <div className='w-100'>
          <ResourcesTitles />
        </div>
        <div className='' >

          {
            isemploye.length > 0 ?
          <DeveloperList /> :

          <div className='card'>
            <div className="card-body">

              <div className="d-flex justify-content-center align-items-center flex-column">
                <i className="fa-solid fa-person-circle-question text-secondary" style={{ fontSize: "100px" }}></i>

                <div className="small mt-4 text-secondary">Data not Available</div>
              </div>

            </div>
          </div>
          }
        </div>

      </div>

    </div>
  )
}

export default ProjectsIndex;