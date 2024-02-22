import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {

    const navigate = useNavigate();
    const { Component } = props;
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const logindata = sessionStorage.getItem('token');

        setLogin(!!logindata);

        if (!logindata) {
            navigate('/login');
        }

    }, [navigate]);

    return login ? <Component /> : login;

}

export default Protected;