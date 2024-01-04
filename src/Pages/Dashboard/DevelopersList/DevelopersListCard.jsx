import React, { useState } from 'react';

import EmployesTable from './DeveloperList';
import Pagination from '../../Components/PaginationComponent/Pagination';

export default function DevelopersListCard(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Assume you have 10 pages

    const handlePageChange = (newPage) => {
        // Add logic to fetch and update data based on the new page
        setCurrentPage(newPage);
    };

    return (
        <>
            <EmployesTable DevelopersListData={props.DevelopersListData} />
            
            <div className='my-2'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}
