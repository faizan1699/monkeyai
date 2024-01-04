import React from 'react';

import DepartmentData from './DepartmentData';

export default function DepartMents() {

  const DepartmentsEmployes = [

    { title: "DataEngineering", resourceNum: 174},
    { title: "Data Science", resourceNum: 185},
    { title: "DevSecOps", resourceNum: 314},
    { title: "Software Engineering", resourceNum: 658, active: "active"},
    { title: "Sales", resourceNum: 12}
  
  ];

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
