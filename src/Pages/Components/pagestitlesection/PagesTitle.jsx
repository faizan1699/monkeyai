import React from 'react';

import { Link } from 'react-router-dom';

export default function PagesTitle({ pageTitle }) {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div>
        <h3>
        <i className={`${pageIcon} fa`}></i>
          <Link>{pageTitle}</Link>
          </h3>
      </div>
    </div>
  )
}
