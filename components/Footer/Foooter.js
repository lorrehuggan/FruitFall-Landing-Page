import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';

export const Wrapper = styled.section`
  width: 100%;
  height: 30rem;
  ${flex}
  background-color: #F976A7;
`;

export const Header = styled.h2`
  font-size: ${FontSize.header};
  font-family: 'Abril Fatface', cursive;
  color: #ffffff;
`;

export const Nav = styled.ul`
  ${flex}
  width: 20rem;
`;

export const Item = styled.li`
  list-style: none;
  font-size: ${FontSize.body};
  font-weight: bold;
  margin: 3rem 0rem;
  color: #ffffff;
  transition: 0.3s ease color;
  cursor: pointer;
  :hover {
    color: #330a19;
  }
`;

export const Socials = styled.div`
  ${flex}
  width: 20rem;
  font-size: 2rem;
  color: #ffffff;
`;

export const Facebook = styled(AiFillFacebook)`
  transition: 0.3s ease color;
  cursor: pointer;
  :hover {
    color: #330a19;
  }
`;

export const Twitter = styled(AiFillTwitterCircle)`
  transition: 0.3s ease color;
  cursor: pointer;
  :hover {
    color: #330a19;
  }
`;

export const Instagram = styled(AiFillInstagram)`
  transition: 0.3s ease color;
  cursor: pointer;
  :hover {
    color: #330a19;
  }
`;

export const Pinterest = styled(FaPinterest)`
  transition: 0.3s ease color;
  cursor: pointer;
  :hover {
    color: #330a19;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Header>FRUIT FALL</Header>
      <Nav justify="space-between" direction="row">
        <Item>About</Item>
        <Item>Services</Item>
        <Item>Projects</Item>
      </Nav>
      <Socials justify="space-between" direction="row">
        <Facebook />
        <Instagram />
        <Twitter />
        <Pinterest />
      </Socials>
    </Wrapper>
  );
}
