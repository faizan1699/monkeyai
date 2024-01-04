import React from 'react';

import DeveloperListCard from './DevelopersListCard';
import { DevelopersListData } from '../../../../Services/DevelopersListData';

export default function DeveloperList() {

    return (
        <div className='card' >
            
            <div className='card-body' style={{overflow: "scroll"}}>
                <DeveloperListCard DevelopersListData={DevelopersListData} />
            </div>
        </div>
    )
}
