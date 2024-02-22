import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../../Common/Logo/Logo.png';

import UserAccount from './UserAccount';
import SearchInput from '../../Components/Search/SearchInput';

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg p-0" style={{ background: "#fff" }}>

            <div className="container-fluid ">
                
                <button className="navbar-toggler px-2 btn-sm rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="" id='navbar_logo_container' >
                    <Link className="nav-link ps-2" to='/dashboard' >
                        <img src={Logo} className='img-fluid navbar-brand mx-md-2 ' id='nav_logo' alt="Logo Not Found" />
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <SearchInput placeholder='Search' width='' />
                </div>

                <div className='py-2' id='Nav_user_Account'>
                    <UserAccount />
                </div>

            </div>

        </nav>
    )
}

export default  Navbar;