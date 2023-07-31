const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className='form-input'
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
