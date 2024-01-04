import React from 'react';

import Card from '../../../Components/card/Card';
import EditSource from './addsource/EditSource';

import { Link } from 'react-router-dom';

export default function EditResource() {
  return (
    <div>
      <Card classes=' border-0 bg-light ' carddata={
        <div className='d-flex align-items-center'>
          <Link className='nav-link me-2' to='/projects' ><i className='fa-solid fa-arrow-left fs-4'></i></Link>
          <h3 className='fw-bold'>Edit Source</h3>
        </div>
      } />

      <Card classes='' carddata={
        <>
          <EditSource />
        </>
      } />
    </div>
  )
}
