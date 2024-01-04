import React from 'react';

import EmployesTable from '../EmployesDataTable/EmployesTable';

export default function DevelopersListCard(props) {


    return (
        <>
            <EmployesTable DevelopersListData={props.DevelopersListData} />
        </>
    );
}
