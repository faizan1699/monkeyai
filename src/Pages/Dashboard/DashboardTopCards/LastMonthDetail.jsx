import React, { useState, useEffect } from 'react';


const LastMonthDetail = () => {

  const [employelength, setEmployeLength] = useState([]);
  const [projectlength, setProjectLength] = useState([]);
  const [clientslength , setClientLength] = useState([]);

  useEffect(() => {

    const employecount = localStorage.getItem('Employes');
    const getlength = JSON.parse(employecount);
    setEmployeLength(getlength);

    const projectcount = localStorage.getItem('addnewproject');
    const projectlength = JSON.parse(projectcount);
    setProjectLength(projectlength);
    setClientLength(projectlength)

  }, [])

  const cardsdata = [
    { title: 'Total Employees', number: employelength.length, icon: 'fa-solid fa-people-group', iconbg: 'purple', textcolor: '#02eff7' },
    { title: 'Total Projects', number: projectlength.length, icon: 'fa-solid fa-file-invoice', iconbg: '#02eff7', textcolor: 'red' },
    { title: 'Total Clients', number: clientslength.length, icon: 'fa-solid fa-hand-holding-dollar', iconbg: '#CAE44F', textcolor: '#32CD32' },

  ];


  return (
    <div className='row g-1'>
      {
        cardsdata.map((data , Index) => (

          <div key={Index}  className="col-md-4 mb-2">
            <div className="card ">
              <div className="card-body rounded d-flex justify-content-between">
                <div className="">
                  <h5 className='card-title fw-bold '>{data.title ? data.title : 'not found'}</h5>
                  <span className='fw-bold small'>{data.number ? data.number : 'not found'}</span>
                  <p className='card-text fw-bold small mt-3' style={{ color: `${data.textcolor}` }}>{data.number ? data.number : 'not found'}<span className='small ms-1 text-dark'>since last month</span> </p>
                </div>
                <div className='card_icons'>
                  <i className={`${data.icon} rounded-pill fs-3 d-flex justify-content-center align-items-center text-light`} style={{ background: `${data.iconbg}` }}></i>
                </div>
              </div>
            </div>
          </div>
        ))
        }
    </div>
  )
}

export default LastMonthDetail;