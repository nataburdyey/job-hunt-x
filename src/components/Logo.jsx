import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Wrapper = styled.div`
text-align: center;

  h1 {
    color: var(--primary-900);
    font-weight: 700;
  }
`;

const Logo = () => {
  // return <img src={logo} alt="jobhuntx logo" className="logo" />
  return (
    <Wrapper>
      <h1>JobHuntX</h1>
    </Wrapper>
  );
};

export default Logo;
