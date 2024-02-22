import React from 'react';

import Search from '../../../Components/Search/SearchInput';

export default function EmployeDetailsFilter() {


  return (
    <div className='card'>
      <div className="card-body ">

        <div className="row g-0 ">

          <div className="col-md-4 d-flex flex-column ">

            <div className="d-flex align-items-center" >
              <div className="w-100">
              
                <label htmlFor="search" className='Filters_Select_label'>Search</label>
                <Search width="" height='' py='3px' radius={0} placeholder="Search Project" />
              
              </div>
            </div>

          </div>

          <div className="col-md-8 mt-2 d-flex justify-content-center px-1 align-items-center">
            <div className="row g-1">

              <div className='d-flex flex-column col'>

                <label htmlFor="" className='Filters_Select_label'>Project</label>
                <select className="form-select-sm me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">Youtube</option>
                  <option value="2">Instagram</option>
                  <option value="3">Facebook</option>
                </select>

              </div>

              <div className='d-flex flex-column col'>

                <label htmlFor="" className='Filters_Select_label'>Status</label>
                <select className="form-select-sm me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">ADDA Pro</option>
                  <option value="2">Pak Aid</option>
                  <option value="3">Quora.com</option>
                </select>

              </div>

              <div className='d-flex flex-column col'>

                <label htmlFor="" className='Filters_Select_label'>Engagement</label>
                <select className="form-select-sm  me-1 mb-2" aria-label="Default select example">
                  <option defaultValue>All</option>
                  <option value="1">Soneri Gas</option>
                  <option value="2">Telenor</option>
                  <option value="3">Pak Aid</option>
                </select>

              </div>

              <div className='col d-flex align-items-center' >
                <button className='btn btn-light border  border-dark rounded-0 btn-sm px-4' style={{ marginTop: "10px" }}>Apply</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
