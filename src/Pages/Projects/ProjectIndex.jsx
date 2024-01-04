import React from 'react';

import DepartmentData from './Components/DepartMents/DepartMents';
import DeveloperList from './Components/DevelopersList/DeveloperList';
import ProjectMercyIdpTopCard from './Components/ProjectMercyTopCards/ProjectMercyIdpTopCard';
import ResourceLocation from './Components/ResourcesLocation/ResourcesLocation';
import ResourcesTitles from './Components/ResourcesTitles/ResourcesTitles';

import AddBtn from '../Components/AddBtn/AddBtn';
import { Link } from 'react-router-dom';

export default function ProjectsIndex() {

  return (

    <div className=''>
      <div className='row g-0'>

        <div className=''>
          <div className="row m-0">
            <div className="col-md-6">

              <Link className='nav-link' to='/dashboard' >
                <h3 className='my-3 fw-bold'><i className="fa-solid fa-arrow-left small"></i> Mercy-IDP Details</h3>
              </Link>

            </div>

            <div className="col-md-6 ">

              <div className="d-flex justify-content-md-end justify-content-center mt-md-3 m-2 mt-sm-1">

                <div className='d-flex align-items-center'>
          
                  <div className='me-2'>
                    <AddBtn btnclass='px-3 btn-light border-1 border-dark' iconClass='' fwicon='fa-solid fa-pen bg-light ' btntitle='Edit Source' routlink='editresource' />
                  </div> 

                  <div className=''>
                    <AddBtn btnclass='px-3 btn-dark' fwicon='fa-solid text-dark bg-light  fa-add' btntitle='Project List' routlink='projectlist' />
                  </div>

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
          <ResourceLocation />
        </div>

        <div className="col-md-4">
          <DepartmentData />
        </div>

        <div className='w-100'>
          <ResourcesTitles />
        </div>
        <div className='w-100' >
          <DeveloperList />
        </div>

      </div>

    </div>
  )
}
