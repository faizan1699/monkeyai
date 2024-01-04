import React from 'react';

import EmptyAssignProject from './AssignEmpty/EmptyAssignProject';
import Assignproject from './AssignEmpty/EmptyAssignProject';

export default function AssignProject() {
  return (

    <div className='card'>

      <div className="card-body ">

        {<Assignproject /> ? <EmptyAssignProject /> : <Assignproject />}

      </div>

    </div>

  )
}
