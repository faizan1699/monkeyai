import React from 'react';

import EditSourceForm from '../../Components/editsource/EditSourceForm';

import { Link, useParams } from 'react-router-dom';

const EditSource = () => {

  const { employeeId } = useParams();

  return (

    <>
      <div className="my-3">

        <h3 className='fw-bold d-flex'>
          <Link className='nav-link me-3' to={`/employees/${employeeId}`}>
            <i className='fa-solid fa-arrow-left small'></i>
          </Link>
          Edit Source
        </h3>

      </div>

      <EditSourceForm />
    </>
  )
}

export default EditSource;