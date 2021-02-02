import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 2.5em;
  line-height: 2.5em;
  left: 0;
  right: 0;
  background: #333;
  z-index: 100;
`;

const Link = styled(NavLink)`
  margin: 0 0.5em;
  color: white;
  &.active {
    color: #ccc;
    text-decoration: none;
    pointer-events: none;
  }
`;

const Header = () => (
  <Container>
    <Link to="/admin">Admin view</Link>
    <Link to="/employee">Employee view</Link>
  </Container>
);

export default Header;
