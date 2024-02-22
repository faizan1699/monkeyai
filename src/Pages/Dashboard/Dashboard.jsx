import React from 'react';

import EmployeLocation from '../Components/employelocation/EmployeLocation';
import LastMonthDetail from './DashboardTopCards/LastMonthDetail';
import DepartMents from './DepartMents/DepartMents';
import DeveloperList from './DevelopersList/DeveloperList';
import Projects from './Projects/Projects';
import ResourcesTitle from './ResourcesTitles/ResourcesTitles';

const Dashboard = () => {

  return (
    <div className='mt-3'>

      <h3 className='fw-bold my-4'>Dashboard</h3>

      <div className='row g-2'>
        <LastMonthDetail />
      </div>

      <div className="row g-2 mb-2">

        <div className="col-md-8">
          <EmployeLocation />
        </div>
        <div className="col-md-4">
          <Projects />
        </div>

      </div>


      <div className="row g-2">

        <div className="col-md-8">
          <ResourcesTitle />
        </div>
        <div className="col-md-4">
          <DepartMents />
        </div>

      </div>

      <div className='mt-2'>
        <DeveloperList />
      </div>

    </div>
  )
}

export default Dashboard;