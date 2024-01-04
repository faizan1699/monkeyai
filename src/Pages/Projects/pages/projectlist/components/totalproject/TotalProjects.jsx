import React from 'react';

import { TotalProjectList } from '../../../../../../Services/Services';
import TotalProjectdata from './TotalProjectsdata';

export default function TotalProjects() {
    return (
        <>
            <TotalProjectdata TotalProjectList={TotalProjectList} />
        </>
    )
}
