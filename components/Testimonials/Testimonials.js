import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';
import { data } from './data';
import Image from 'next/image';

export const Wrapper = styled.section`
  ${flex}
  height: 40rem;
  width: 100%;
`;

export const Container = styled.div`
  width: 90%;
  height: 30rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Item = styled.div`
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  ${flex}
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 0;
`;

export const ProfileBody = styled.p`
  font-size: ${FontSize.body};
  line-height: calc(${FontSize.body} * 1.4);
  margin: 2rem 0rem;
  text-align: center;
  letter-spacing: 1px;
`;

export const ProfileName = styled.h4`
  font-size: ${FontSize.bodyBig};
  margin-bottom: 0.5rem;
  font-family: 'Abril Fatface', cursive;
`;

export const ProfilePos = styled.p`
  font-size: ${FontSize.body};
  color: grey;
`;

export const ProfileHeader = styled.h2`
  font-size: ${FontSize.bodyBig};
  font-family: 'Abril Fatface', cursive;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: grey;
`;

export function Testimonials() {
  return (
    <Wrapper>
      <ProfileHeader>Client Testimonials</ProfileHeader>
      <Container>
        {data.map((x) => {
          return (
            <Item key={x.jobTitle}>
              <ProfileImage src={x.image} height={100} width={100} />
              <ProfileBody>{x.body}</ProfileBody>
              <ProfileName>{x.name}</ProfileName>
              <ProfilePos>{x.jobTitle}</ProfilePos>
            </Item>
          );
        })}
      </Container>
    </Wrapper>
  );
}
