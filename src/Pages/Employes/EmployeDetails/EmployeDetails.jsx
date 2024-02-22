import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import Card from '../../Components/card/Card';

import AssignProjectbtn from '../../Components/AddBtn/AddBtn';
import AssignProject from './DetailsEmployeComponent/AssignProject/AssignProject';
import DeveloperDetails from './DetailsEmployeComponent/DeveloperDetails/DeveloperDetails';
import EmployeDetailsFilter from './DetailsEmployeComponent/EmployeDetailsFilter';
import EmployeSkills from './DetailsEmployeComponent/EmployeSkills/EmployeSkills';
import ProfessionalDetail from './DetailsEmployeComponent/ProfessionalDetails/ProfessionalDetail';
import DeveloperInfo from './DetailsEmployeComponent/employeimgsection/DeveloperInfo';

const EmployeDetails = () => {

  const { employeeId } = useParams();
  const [employe , setEmploye] = useState({});

  useEffect(() => {

    const getspecifimploy = localStorage.getItem(`Employes`);
    const employedata = JSON.parse(getspecifimploy);
    const employee = employedata.find(emp => emp.id === employeeId);
    setEmploye(employee);

  }, [employeeId]);

  return (

    <div className=''>

      <div className="row g-0">

        <div className='mt-3 mb-3 col-md-5'>

          <h3 className='fw-bold d-flex'>
            <Link className='nav-link' to='/employees'>
              <i className="fa-solid fa-arrow-left me-2 fs-4 "></i>
            </Link>
            Employes Details
          </h3>

        </div>

        <div className='col-md-7  '>

          <div className="d-flex justify-content-md-end justify-content-around mb-md-0 mb-3 align-items-center h-100" id='employe_detail_btn'>
            <AssignProjectbtn btnclass={`btn-light border-dark  me-2`} fwicon='fa-solid fa-pen' routlink={`/employees/${employeeId}/edit`} btntitle='Edit Source' />
            <AssignProjectbtn btnclass={`btn-dark`} fwicon='fa-solid fa-add text-dark px-1' routlink={`/employees/${employeeId}/assignment`} btntitle='Assign Project' />
          </div>

        </div>
      </div>

      <div className="row g-2">

        <div className="col-md-8 ">

          <div >
            <EmployeDetailsFilter />
          </div>

          <div className="mt-2 ">
            <AssignProject />
          </div>

        </div>

        <div className="col-md-4">

          <Card carddata={
            <>

              <DeveloperDetails employedata={employe} />

              <DeveloperInfo employedata={employe} />
              <hr className="" />
              <ProfessionalDetail employedata={employe} />
              <hr className="" />
              <EmployeSkills employedata={employe} />

            </>

          } />
        </div>
      </div>
    </div>
  );
}


export default EmployeDetails;