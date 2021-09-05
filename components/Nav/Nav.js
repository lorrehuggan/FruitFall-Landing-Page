import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';

export const Navigation = styled.nav`
  width: 1200px;
  ${flex}
  height: 5rem;
  margin-top: 1rem;
  z-index: 1;
`;

export const Logo = styled.div`
  font-size: ${FontSize.headline};
  font-family: 'Bebas Neue', cursive;
  font-weight: bold;
  color: #ffffff;
  ${flex}
`;

export const List = styled.ul`
  ${flex}
  width: 35%;
`;

export const Item = styled.li`
  list-style: none;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease;
  :hover {
    color: #101020;
  }
`;

export const NavWrap = styled.div`
  ${flex}
`;

export const ContactButton = styled.li`
  padding: 1rem;
  color: #101020;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  list-style: none;
  transition: color 0.3s ease, background-color 0.5s ease;
  font-weight: bold;
  :hover {
    color: #ffffff;
    background-color: #101020;
  }
`;

function Nav() {
  return (
    <NavWrap>
      <Navigation direction="row" align="left" justify="space-between">
        <Logo>Fruit Fall </Logo>
        <List direction="row" justify="space-between">
          <Item>About</Item>
          <Item>Projects</Item>
          <Item>Services</Item>
          <ContactButton>Contact</ContactButton>
        </List>
      </Navigation>
    </NavWrap>
  );
}

export default Nav;
