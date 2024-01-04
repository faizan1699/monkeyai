import React, { useEffect } from 'react';


export default function Sample() {

    useEffect(() => {
        console.log("from Sample");
    }, [])

    return (

        <div>
            g
        </div>

    )
}
;