import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';
import Nav from '../Nav/Nav';
import styles from './styles.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Wrapper = styled.section`
  height: 100vh;
  background-color: #3fc0fe;
  position: relative;
`;

export const Container = styled.div`
  ${flex}
  width: 100%;
  margin-top: 12rem;
`;

export const Header = styled.h1`
  font-size: ${FontSize.heroHeadline};
  font-family: 'Abril Fatface', cursive;
  color: #ffffff;
`;

export const Arrow = styled(AiOutlineArrowDown)`
  font-size: 14rem;
  margin-top: 4rem;
  color: #ffffff;
`;

export default function Hero() {
  return (
    <Wrapper>
      <div className={styles.container}>
        <Nav />
        <Container>
          <Header>Creating Since The Start</Header>
        </Container>
      </div>
    </Wrapper>
  );
}
