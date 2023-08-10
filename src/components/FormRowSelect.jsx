const FormRowSelect = ({ labelText, name, value, handleJobInput, list }) => {
  return (
    <div className='form-row'>
      <label htmlFor='status' className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleJobInput}
        className='form-select'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;