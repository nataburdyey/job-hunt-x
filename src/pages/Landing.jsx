import { Link } from 'react-router-dom';

import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <Logo /> */}
        <h1>JobHuntX</h1>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Career <span>Path</span> Navigator
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            saepe! Obcaecati aliquam provident similique maiores aut. Voluptatum
            quos facere temporibus!
          </p>
        </div>

        <Link to='/register' className='btn btn-hero'>
          Login/Register
        </Link>
        <img src={main} alt='Job Hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
