import React from 'react';

import LastMonthDataCards from './LastMonthDataCards';

import { lastMonthDetails } from '../../../Services/Services';

export default function LastMonthDetail() {

  return (
    <>
      {
        lastMonthDetails.map((data, Index) => (
          <div className="col-md-4 mb-2" key={Index}>
            <LastMonthDataCards data={data} />
          </div>
        ))
      }

    </>
  )
}
