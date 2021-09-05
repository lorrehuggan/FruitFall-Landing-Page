import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';
import Image from 'next/image';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 28rem;
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
  font-family: 'Abril Fatface', cursive;
  margin: 0;
  margin-bottom: 1rem;
`;

export const Body = styled.p`
  font-size: ${FontSize.body};
  line-height: calc(${FontSize.body} * 1.4);
  margin: 0;
  margin-bottom: 1rem;
`;

export const Link = styled.p`
  font-size: ${FontSize.body};
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

export const GridImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 50%;
`;

export default function FourBox({ image, image2, image3, image4 }) {
  return (
    <Wrapper>
      <Image src={image} layout="responsive" objectFit="cover" />
      <Image src={image2} layout="responsive" objectFit="cover" />
      <Image src={image3} layout="responsive" objectFit="cover" />
      <Image src={image4} layout="responsive" objectFitj="cover" />
    </Wrapper>
  );
}
