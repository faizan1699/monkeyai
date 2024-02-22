import React, { useEffect, useState } from 'react';

import AddSource from '../Components/AddBtn/AddBtn';
import DeveloperTable from '../Components/datatable/DeveloperListTable';
import EmployesFilters from './EmployesFilters/EmployesFilters';

const Employes = () => {

  const [isemploye, setisEmploye] = useState([]);

  useEffect(() => {

    const getEmploye = localStorage.getItem(`Employes`);
    const employees = JSON.parse(getEmploye);

    setisEmploye(employees);

  }, [])

  return (

    <>
      <div className='row g-0 '>

        <div className='mt-3 mb-2 d-flex justify-content-between w-100'>
          <h3 className='fw-bold w-100'>Employes List</h3>

          <div className="d-flex align-items-center justify-content-end w-100">
            <AddSource iconclassName='' fwicon='fa-solid fa-add bg-light px-1 text-dark' btnclass='btn-dark' routlink="new" btntitle='Add Source' />
          </div>

        </div>

        <div className="my-md-2 mb-2">
          <EmployesFilters />
        </div>

        <div className='mb-2'>
          {
            isemploye.length > 0 ?
              <DeveloperTable /> :
              <div className='card'>
                <div className="card-body">

                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <i className="fa-solid fa-person-circle-question text-secondary" style={{fontSize: "100px"}}></i>

                    <div className="small mt-4 text-secondary">Data not Available</div>
                  </div>

                </div>
              </div>
          }
        </div>

      </div>
    </>
  )
}

export default Employes;