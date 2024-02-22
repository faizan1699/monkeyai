import React, { useState } from 'react';

const AddDepartment = () => {

    const [depart, setDepart] = useState({
        department: '',
        manager: '',
        mail: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDepart((data) => ({ ...data, [name]: value }));
    }

    const handleAdddepartment = (e) => {
        e.preventDefault();
       
        const existingDeppartment = JSON.parse(localStorage.getItem(`department`)) || [] ;
        existingDeppartment.push(depart);
        localStorage.setItem(`department` , JSON.stringify(existingDeppartment));

    } 

    return (
        <div className='mt-3 bg-light'>

            <h3 className='fw-bold'>Add Department</h3>

            <form onSubmit={handleAdddepartment}>
                <div className="row g-2">

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label small">Department</label>
                            <div className="input-group">
                                <span className="input-group-text set_icon_bg"><i className='fa-solid fa-building'></i></span>
                                <input type="text" value={depart.department} onChange={handleInputChange} name='department' className='form-control ' placeholder='Department' required />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label small">Manager</label>
                            <div className="input-group">
                                <span className="input-group-text set_icon_bg"><i className='fa-solid fa-person'></i></span>
                                <input type="text" name='manager' value={depart.manager} onChange={handleInputChange} className='form-control ' placeholder='Manager' required />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label small">Email</label>
                            <div className="input-group">
                                <span className="input-group-text set_icon_bg"><i className="fa-solid fa-envelope"></i></span>
                                <input type="email" name='mail' value={depart.mail} onChange={handleInputChange} className='form-control ' placeholder='Manager Mail' />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button className='btn btn-success px-5' type='submit' >Submit</button>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default AddDepartment;