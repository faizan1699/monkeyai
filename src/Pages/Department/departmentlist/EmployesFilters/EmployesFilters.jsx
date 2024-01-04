import React from 'react';

import SearchInput from '../../../Components/Search/SearchInput';
import { Link } from 'react-router-dom';

export default function EmployesFilters() {

  return (
    <div className='card'>
      <div className="card-body ">

        <div className="row ">

          <div className="col-md-5 d-flex flex-column ">

            <div className="d-flex align-items-center" >
              <div className="w-100">
                <label htmlFor="search" className='Filters_Select_label'>Search</label>
                <SearchInput placeholder="Search Employes" width="" height='' py='3px' radius={0} />
              </div>
            </div>

          </div>

          <div className="col-md-7 mt-2 d-flex align-items-center jus">
            <div className="row g-0">

              <div className='d-flex flex-column col'>
                <label htmlFor="" className='Filters_Select_label'>Department</label>
                <select className="form-select-sm me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">PMO</option>
                  <option value="2">Data Science</option>
                  <option value="3">Data Analytics</option>
                </select>
              </div>

              <div className='col d-flex align-items-center' >
                <Link to='' className='btn btn-light border  border-dark rounded-0 btn-sm px-4' style={{ marginTop: "10px" }} >Apply</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
