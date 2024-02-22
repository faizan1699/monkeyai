import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [addemploy, setAddEmploy] = useState([]);

    const [input, setInput] = useState({
        employename: '',
        email: '',
        desigination: '',
        id: '',
        password: '',
    });

    const handleSignup = (e) => {
        e.preventDefault();

        const existingEmploye = JSON.parse(localStorage.getItem(`employeLogin`)) || [];
        existingEmploye.push(addemploy);
        localStorage.setItem(`employeLogin`, JSON.stringify(existingEmploye));

        navigate('/login');

    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput((data) => ({ ...data, [name]: value }));
        setAddEmploy((data) => ({ ...data, [name]: value }));
    }


    return (
        <div className="ms-md-5" style={{ marginTop: "5%" }}>


            <div className='d-flex justify-content-center'>
                <div className="col-md-4 col-10 col-lg-4">
                    <h2 className='mb-3 text-center text-success text-uppercase mt-3'>SignUp - Monkey-Ai</h2>

                    <form onSubmit={handleSignup}>

                        <div className="form-floating mb-2">
                            <input type="text" name='employename' value={input.employename} onChange={handleInputChange} className="form-control rounded-0" autoComplete='employe name' id="floatingname" required placeholder="John" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input type="email" name='email' value={input.email} onChange={handleInputChange} className="form-control rounded-0" id="floatingemail" required placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>


                        <div className='my-2'>

                            <select onChange={handleInputChange} name='desigination' value={input.desigination} className="form-select py-3" aria-label="Default select example">

                                <option defaultValue>Select Your Desigination</option>
                                <option value="CEO">CEO</option>
                                <option value="Markitting Manager">Markitting Manager</option>
                                <option value="Software engineer">Software Engineer</option>
                                <option value="Backend Develepor">Backend Develepor</option>
                                <option value="Front End Developer">Front End Developer</option>
                                <option value="Graphic Designer">Graphic Designer</option>

                            </select>

                        </div>

                        <div className="form-floating mb-2">
                            <input type="number" min='4' name='id' value={input.id} onChange={handleInputChange} className="form-control rounded-0" id="floatingid" required placeholder="id" />
                            <label htmlFor="floatingID">Employe ID</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" name='password' autoComplete="on" onChange={handleInputChange} value={input.password} className="form-control rounded-0" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="d-flex justify-content-end pe-1 mt-2">
                            <Link to='/login' className='small pe-1 fw-bold'>Already have account</Link>
                        </div>

                        <div className="my-3">
                            <button className='btn btn-success w-100 rounded-0'>SignUp</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup;