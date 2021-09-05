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
  font-size: ${FontSize.header};
  font-family: 'Bebas Neue', cursive;
  font-weight: bold;
  color: #ffffff;
  ${flex}
`;

export const List = styled.ul`
  ${flex}
  width: 25%;
`;

export const Item = styled.li`
  list-style: none;
  color: #ffffff;
`;

export const NavWrap = styled.div`
  ${flex}
`;

function Nav() {
  return (
    <NavWrap>
      <Navigation direction="row" align="left" justify="space-between">
        <Logo>Fruit Tree</Logo>
        <List direction="row" justify="space-between">
          <Item>About</Item>
          <Item>Projects</Item>
          <Item>Services</Item>
        </List>
      </Navigation>
    </NavWrap>
  );
}

export default Nav;
