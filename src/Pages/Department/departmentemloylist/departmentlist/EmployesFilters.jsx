import React from 'react';

import SearchInput from '../../../Components/Search/SearchInput';

const EmployesFilters = () => {

  return (
    <div className='card'>
      <div className="card-body ">

        <div className="row ">

          <div className="col-md-3 d-flex flex-column ">

            <div className="d-flex align-items-center" >
              <div className="w-100">
                <label htmlFor="search" className='Filters_Select_label'>Search</label>
                <SearchInput placeholder="Search Employes" width="" height='' py='3px' radius={0} />
              </div>
            </div>

          </div>

          <div className="col-md-9 mt-2 d-flex align-items-center jus">
            <div className="row g-0">

              <div className='d-flex flex-column col-auto'>
                <label htmlFor="" className='Filters_Select_label'>Title</label>
                <select className="form-select-sm me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">FrontEnd Developer</option>
                  <option value="2">Backend Developer</option>
                  <option value="3">QA</option>
                </select>
              </div>

              <div className='d-flex flex-column col-auto'>
                <label htmlFor="" className='Filters_Select_label'>Department</label>
                <select className="form-select-sm me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">Software Engineering</option>
                  <option value="2">Data Science</option>
                  <option value="3">Data Analytics</option>
                </select>
              </div>

              <div className='d-flex flex-column col-auto'>
                <label htmlFor="" className='Filters_Select_label'>Country</label>
                <select className="form-select-sm me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">Pakistan</option>
                  <option value="2">USA</option>
                  <option value="3">South Africa</option>
                  <option value="4">Russia</option>
                  <option value="5">China</option>
                  <option value="6">Neather Land</option>
                </select>
              </div>

              <div className='d-flex flex-column col-auto'>
                <label htmlFor="" className='Filters_Select_label'>City</label>
                <select className="form-select-sm me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">Software Engineering</option>
                  <option value="2">Data Science</option>
                  <option value="3">Data Analytics</option>
                </select>
              </div>

              <div className='col d-flex align-items-center' >
                <button className='btn btn-light border border-dark rounded-0 btn-sm px-4' style={{ marginTop: "10px" }}>Apply</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default EmployesFilters 