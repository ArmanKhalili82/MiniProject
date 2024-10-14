import React from 'react';

const Select = ({ value, onChange, options, placeholder }) => (
  <select
    value={value}
    onChange={onChange}
    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
  >
    <option value="" disabled>{placeholder}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
