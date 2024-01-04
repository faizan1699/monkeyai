import React from 'react';

import LastMonthDetail from './DashboardTopCards/LastMonthDetail';
import ResourcesLocation from './ResourcesLocation/ResourcesLocation';
import Projects from './Projects/Projects';

import ResourcesTitle from './ResourcesTitles/ResourcesTitles';
import DepartMents from './DepartMents/DepartMents';

import DeveloperList from './DevelopersList/DeveloperList';

export default function Dashboard() {

  return (
    <div className='mt-3'>
      <h3 className='fw-bold my-3'>Dashboard</h3>

      <div className='row g-2'>
        <LastMonthDetail />
      </div>

      <div className="row g-2 mb-2">

        <div className="col-md-8">
          <ResourcesLocation />
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

      <div className='my-2'>
        <DeveloperList />
      </div>

    </div>
  )
}
