import React, { useState } from 'react';

import Pagination from '../../Components/PaginationComponent/Pagination';

import DeveloperTable from './DevelopersListCard';
import { DevelopersListData } from '../../../Services/DevelopersListData';

export default function DeveloperList() {


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Assume you have 10 pages

    const handlePageChange = (newPage) => {
        // Add logic to fetch and update data based on the new page
        setCurrentPage(newPage);
    };


    return (
        <div className='card' style={{ overflow: "scroll" }}>

            <div className='card-body'>
                <DeveloperTable DevelopersListData={DevelopersListData} />
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    )
}
