import React from 'react';

import AddBtn from '../../Components/AddBtn/AddBtn';
import EmployesFilters from './EmployesFilters/EmployesFilters';
import DepartmentEmployesList from './EmployesFilters/DepartmentEmployesList';

export default function DepartmentList() {

  return (

    <div className='row g-0 '>

      <div className="my-3 d-flex justify-content-between">
      
        <h3 className='fw-bold'>Department List</h3>
        <AddBtn fwicon='fa-solid fa-add text-dark' btnclass={`btn-dark`} btntitle='Add Department' routlink='departmentemployees' />
      
      </div>

      <div>
        <EmployesFilters />
      </div>
      
      <div className='my-2'>
        <DepartmentEmployesList />
      </div>



    </div>

  )
}
