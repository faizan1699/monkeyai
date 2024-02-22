import React from 'react';

import DeveloperList from './DevelopersList/DepartmentEmployesList';
import EmployesFilter from './departmentlist/EmployesFilters';

import { Link } from 'react-router-dom';

const DepartmentEmployesList = () => {

  return (

    <div className=' g-0'>

      <div className='mt-3 mb-2 py-2 d-flex justify-content-between'>
        <h3 className='fw-bold'>
          <Link className='nav-link' to='/department'>
            <i className="fa-solid fa-arrow-left small me-2"></i>
            Department Employes List
          </Link>
        </h3>
      </div>

      <div className='mb-2'>
        <EmployesFilter />

        <div className='mt-2'>
          <DeveloperList />
        </div>

      </div>

    </div>
  )
}

export default DepartmentEmployesList;