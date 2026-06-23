import React from 'react';

export default ({ name, label, value, error, onChange }) => {
  return (
    <div className={name}>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {error}
      </div>
    </div>
  );
};
