import React from 'react';

import AddSource from '../Components/AddBtn/AddBtn';
import DeveloperList from './DevelopersList/DeveloperList';
import EmployesFilters from './EmployesFilters/EmployesFilters';

export default function Employes() {

  return (

    <div className='row g-0 '>

      <div className='mt-3 mb-2 d-flex justify-content-between w-100'>
        <h3 className='fw-bold w-100'>Employes List</h3>

        <div className="d-flex align-items-center justify-content-end w-100">
          <AddSource iconClass='' fwicon='fa-solid fa-add bg-light px-1 text-dark' btnclass='btn-dark' routlink="addresource" btntitle='Add Source' />
        </div>

      </div>

      <div className="my-md-2 mb-2">
        <EmployesFilters />
      </div>

      <div className='mb-2'>
        <DeveloperList />
      </div>

    </div>
  )
}
