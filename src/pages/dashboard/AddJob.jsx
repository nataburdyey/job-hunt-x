import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { editJob } from '../../../../jobster-final/src/features/job/jobSlice';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOption,
    status,
    statusOption,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields');
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };
  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='jobLocation'
            value={jobLocation}
            labelText=' Job Location'
            handleChange={handleJobInput}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => {
                console.log('clear values');
              }}
            >
              Clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
