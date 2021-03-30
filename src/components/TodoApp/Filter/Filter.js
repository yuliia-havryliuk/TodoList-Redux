import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Фільтруй:
      <input type="text" name="" id="" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
