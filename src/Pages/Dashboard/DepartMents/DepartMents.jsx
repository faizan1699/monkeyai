import React, { useEffect, useState } from 'react';

import DepartmentData from './DepartmentData';

const DepartMents = () => {

  const [department, setDepartment] = useState([]);

  useEffect(() => {

    const getDepartments = localStorage.getItem(`department`);
    const departmentparse = JSON.parse(getDepartments);
    setDepartment(departmentparse);

  }, [])

  return (
    <div className='card h-100'>
      <h5 className='card-header'>Departments</h5>

      {department ?
        <div className="card-body">

        {
          department.map((data, Index) => (
            <div key={Index}>
              <DepartmentData data={data} Index={Index} />
            </div>
          ))
        }

      </div>
      : 
      <div className='d-flex justify-content-center align-items-center h-100 '><h5 className='text-danger'>Nothing to show</h5></div>
      }
    </div>
  );
}

export default DepartMents;