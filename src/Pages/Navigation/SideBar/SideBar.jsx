import React, { useState } from 'react';

import SideBarLi from './SideBarLi';
import { sideBarLinks } from '../../../Services/Services';

const SideBar = () => {

    const [displaysm, setDisplaySm] = useState('none');
    const [icon, setIcon] = useState('fa-sliders');

    const toggleDisplay = () => {
        if (displaysm === 'none') {
            setDisplaySm('block');
            setIcon('fa-angles-up');
        } else {
            setDisplaySm('none');
            setIcon('fa-sliders');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-dark text-light d-md-none w-50 my-2"
                    type="button" onClick={toggleDisplay} >
                    <i className={`fa-solid ${icon}`}></i>
                </button>
            </div>

            <div
                className={`ps-1 py-3 d-md-block d-${displaysm}`} id="side_bar" >

                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="sideBar_navigation">
                    {
                        sideBarLinks.map((data, index) => (
                            <div key={index}>
                                <SideBarLi data={data} />
                            </div>
                        ))
                    }
                </ul>

            </div>
        </>
    );
}

export default SideBar;