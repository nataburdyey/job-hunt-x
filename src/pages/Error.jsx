import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='Page not found' />
        <h3>404 Page Not Found</h3>
        <p>
          We are sorry, but the page you are looking for cannot be found. It
          might have been moved, renamed, or temporarily unavailable.
        </p>
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
