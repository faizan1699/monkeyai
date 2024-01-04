import React, { useState } from 'react';

export default function SearchInput({ width, height, py, radius , placeholder }) {
  
  const [icon, setIcon] = useState("set_Search_Placrholder");
  const [padding , setPadding] = useState("35px");

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if(inputValue.length > 0) {
      setIcon(false);
      setPadding("5px");
    }else {
      setIcon("set_Search_Placrholder");
      setPadding("35px");
    }
    // setIcon(inputValue.length > 0 ? false : "set_Search_Placrholder"); // for other like top bar search
  };

  return (
    <form className='w-100'>
      <input
        className={`form-control me-2 w-${width} h-${height} rounded-${radius} ${icon}`}
        id='Navbar_search'
        type="search"
        placeholder={placeholder}
        style={{ padding: `${py} ${padding}` }}
        onChange={handleChange}
      />
    </form>
  );
}
