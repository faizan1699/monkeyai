import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const [active, setActive] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActive(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <div className='d-flex justify-content-end my-2'>
      <nav>
        <ul className="pagination" id='pagination_Color_setting'>

          {["Previous", 1, 2, 3, 4 , " Next"].map(pageNumber => (
            <li key={pageNumber} className={`page-item rounded-0 p-0 m-0 ${active === pageNumber ? 'active' : ''}`} onClick={() => handlePageClick(pageNumber)}>
              <Link className="page-link rounded-0 " to="">{pageNumber}</Link>
            </li>
          ))
          }
        </ul>
      </nav>
    </div>
  );
}
