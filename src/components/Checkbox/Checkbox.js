import React from 'react';

export default function Checkbox({ id = null, label = '', onChange = null, condition = false }) {
  return (
    <>
      <div>
        <input type="checkbox" id={id} value={id} checked={condition} onChange={onChange} />
        <label htmlFor={id}></label>
        <div>{label}</div>
      </div>
    </>
  );
}
