import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from 'react-icons/ai';

export const Wrapper = styled.section`
  width: 100%;
  height: 30rem;
  ${flex}
  background-color: #F80C17;
`;

export const Header = styled.h2`
  font-size: ${FontSize.header};
  color: #ffffff;
`;

export const Nav = styled.ul`
  ${flex}
  width: 20rem;
`;

export const Item = styled.li`
  list-style: none;
  font-size: ${FontSize.body};
  margin: 3rem 0rem;
  color: #ffffff;
`;

export const Socials = styled.div`
  ${flex}
  width: 20rem;
  font-size: 2rem;
  color: #ffffff;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Header>FRUIT TREE</Header>
      <Nav justify="space-between" direction="row">
        <Item>About</Item>
        <Item>Services</Item>
        <Item>Projects</Item>
      </Nav>
      <Socials justify="space-between" direction="row">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </Socials>
    </Wrapper>
  );
}
