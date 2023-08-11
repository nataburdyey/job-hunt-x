import { Link } from 'react-router-dom';

import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h2>
            Career <span>Path</span> Navigator
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            saepe! Obcaecati aliquam provident similique maiores aut. Voluptatum
            quos facere temporibus!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='Job Hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
