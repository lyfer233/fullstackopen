import React from 'react';

const Filter = ({ filterValue, filterFunction }) => {
    return (
      <div>
        filter shown with <input value={filterValue} onChange={filterFunction}/>
      </div>
    )
}

export default Filter