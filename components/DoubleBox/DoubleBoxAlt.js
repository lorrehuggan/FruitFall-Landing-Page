import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';
import Image from 'next/image';
import Lemon from '../../public/assets/image/lemon.jpg';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 40rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex}
`;

export const InfoBox = styled.div`
  width: 30rem;
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  ${flex}
`;

export const Header = styled.h2`
  font-size: ${FontSize.header};
  margin: 0;
  margin-bottom: 1rem;
  font-family: 'Abril Fatface', cursive;
`;

export const Body = styled.p`
  font-size: ${FontSize.body};
  line-height: calc(${FontSize.body} * 1.4);
  margin: 0;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

export const Link = styled.p`
  font-size: ${FontSize.body};
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

export const GridImage = styled(Image)`
  object-fit: cover;
  object-position: 0 80%;
`;

export default function DoubleBox({ image, header, body }) {
  return (
    <Wrapper>
      <GridImage src={image} layout="responsive" />
      <Container>
        <InfoBox align="left" justify="space-between">
          <Header>{header}</Header>
          <Body>{body}</Body>
          <Link>Learn More</Link>
        </InfoBox>
      </Container>
    </Wrapper>
  );
}
