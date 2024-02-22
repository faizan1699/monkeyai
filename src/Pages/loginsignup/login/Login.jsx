import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);
    const [checkemail, setCheckEmail] = useState('');
    const [emailborder, setEmailborder] = useState('');
    const [loginattempt, setLoginAttempt] = useState(0);
    const [checkpassword, setCheckPassword] = useState('');
    const [passwordborder, setPasswordborder] = useState('');
    const [showpassword, setShowPassword] = useState('password');
    const [invalidcredentials, setInvlaidCredentials] = useState('');

    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((data) => ({ ...data, [name]: value }))
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const maxLoginAttempts = 3;

        const getEmployedata = localStorage.getItem(`employeLogin`);
        const getEmploye = JSON.parse(getEmployedata) || [];

        const findemployeemail = getEmploye.find((emp) => emp.email === input.email);
        const findemployeepassword = getEmploye.find((emp) => emp.password === input.password);

        const user = getEmploye.find((emp) => emp.email === input.email && emp.password === input.password);
        
        if (!findemployeemail && !findemployeepassword) {

            setInvlaidCredentials('data not found');
            setLoginAttempt(loginattempt + 1);

            if (loginattempt >= maxLoginAttempts) {
                setDisabled(true);
            }

            setTimeout(() => {
                setInvlaidCredentials('');
            }, 5000);
        }
        else if (!findemployeepassword) {

            setCheckPassword('Invalid Password');
            setPasswordborder('danger');

            setTimeout(() => {
                setCheckPassword('');
                setPasswordborder('');
            }, 5000);

        } else if (!findemployeemail) {

            setCheckEmail('Invalid Email');
            setEmailborder('danger');

            setTimeout(() => {
                setCheckEmail('');
                setEmailborder('');
            }, 5000);

        } else {
            navigate('/dashboard');
            localStorage.setItem('employeLogindata', JSON.stringify(user));
            sessionStorage.setItem('token', true);
        }
    }

    const handleShowPassword = () => {

        const checkBox = document.getElementById('Checkbox');
        if (checkBox.checked) {
            setShowPassword('text');
        } else {
            setShowPassword('password');
        }

    }

    return (

        <div className="ms-md-5" style={{ marginTop: "5%" }}>

            <div className='d-flex justify-content-center' >
                <div className="col-md-4 col-10 col-lg-4">

                    <h2 className='mb-3 text-center text-success text-uppercase mt-3'>Login - Monkey-Ai</h2>
                    <div className="small text-center text-danger mb-3">{invalidcredentials}</div>
                    <form onSubmit={handleLogin}>

                        <div className="form-floating mb-2">
                            <input type="email" name='email' value={input.email} onChange={handleInputChange} className={`form-control rounded-0 border-${emailborder}`} id="floatingInput" placeholder="name@example.com" />
                            <div className="d-flex justify-content-end text-danger small">{checkemail}</div>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating">

                            <input type={showpassword} min='4' name='password' value={input.password} onChange={handleInputChange} className={`form-control rounded-0 border-${passwordborder}`} id="floatingPassword" autoComplete="on" placeholder="Password" />
                            <div className="d-flex justify-content-end text-danger small">{checkpassword}</div>

                            <label htmlFor="floatingPassword">Password</label>

                            <div className={`d-flex justify-content-between small align-items-center me-2`}>
                                <div className={`mt-2 `}>
                                    <input type="checkbox" className={`form-check-input border-danger`} id="Checkbox" onClick={handleShowPassword} /> <span className='text-dark disabled'> Show password</span>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-end pe-1 mt-2' style={{ cursor: "pointer" }}>
                                        <Link to='/signup' className="small pe-1 fw-bold" data-toggle="tooltip" data-placement="top" title="create a new Accout">Create new account</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="my-3">
                            <button disabled={disabled} className='btn btn-success w-100 rounded-0' type='submit'>Login</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;