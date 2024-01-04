import React from 'react';

import DeveloperDataCard from './DeveloperDataCard';
import { DeveloperData } from '../../../../../Services/Services';

export default function DeveloperDetails() {

    return (
        <>
            {
                DeveloperData.map((data, Index) => (
                    <div key={Index} >
                        <DeveloperDataCard data={data} />
                    </div>
                ))
            }
        </>


    )
}
