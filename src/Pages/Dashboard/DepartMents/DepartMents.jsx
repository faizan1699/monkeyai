import React from 'react';

import DepartmentData from './DepartmentData';

import { DepartmentsEmployes } from '../../../Services/Services';

export default function DepartMents() {

  return (
    <div className='card h-100'>
      <h5 className='card-header'>Departments</h5>

      <div className="card-body">

        {DepartmentsEmployes.map((data, Index) => (
          <div key={Index} >
            <DepartmentData data={data} Index={Index} />
          </div>
        ))}

      </div>
    </div>
  );
}
