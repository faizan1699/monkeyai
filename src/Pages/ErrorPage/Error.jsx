import React from 'react';

export default function Error() {

    // const SetErrorText = {
    //     position: "relative",
    //     marginTop: "-20%",
    //     zIndex: "1",
    // }

    return (
        <div className='d-flex d-flex flex-column justify-content-center align-items-center h-100'>
           {/* <img className='img-fluid ' src={Error404} alt="" /> */}
           <h1 className='fw-bold text-danger' >SomeThing Went Wrong</h1>
        </div>
    )
}
