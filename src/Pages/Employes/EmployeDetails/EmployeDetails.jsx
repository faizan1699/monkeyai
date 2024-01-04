import React from 'react';

import EmployeDetailsFilter from './DetailsEmployeComponent/EmployeDetailsFilter';
import DeveloperDetails from './DetailsEmployeComponent/DeveloperDetails/DeveloperDetails';
import ProfessionalDetail from './DetailsEmployeComponent/ProfessionalDetails/ProfessionalDetail';
import EmployeSkills from './DetailsEmployeComponent/EmployeSkills/EmployeSkills';
import AssignProject from './DetailsEmployeComponent/AssignProject/AssignProject';

import AssignProjectbtn from '../../Components/AddBtn/AddBtn';

export default function EmployeDetails() {
  return (
    <div className=''>
      <div className='mt-3 mb-2 d-flex justify-content-between w-100'>

        <h3 className='fw-bold w-100'>
          <i className="fa-solid fa-arrow-left"></i>
          Employes Details</h3>

        <div className="d-flex align-items-center justify-content-end w-100">
          <AssignProjectbtn btnclass={`btn-dark`} fwicon='fa-solid fa-add text-dark px-1' routlink='/employees/assignproject' btntitle='Assign Project' />
        </div>

      </div>

      <div className="row g-2">

        <div className="col-md-8">

          <EmployeDetailsFilter />

          <div className="my-2">
            <AssignProject />
          </div>

        </div>

        <div className="col-md-4">
          <div className="card">

            <div className="card-body">

              <DeveloperDetails />

              <hr className="" />

              <ProfessionalDetail />

              <hr className="" />

              <EmployeSkills />

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
