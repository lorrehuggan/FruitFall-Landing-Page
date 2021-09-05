import styled from 'styled-components';
import { HeadTag } from '../components/Head/Head';
import { flex } from '../styles/mixins';
import Hero from '../components/Hero/Hero';
import DoubleBox from '../components/DoubleBox/DoubleBox';
import DoubleBoxAlt from '../components/DoubleBox/DoubleBoxAlt';
import DoubleBoxImage from '../components/DoubleBox/DoubleBoxImage';
import Avacado from '../public/assets/image/avacado.jpg';
import Juice from '../public/assets/image/juice.jpg';
import Lemon from '../public/assets/image/lemon.jpg';
import Cup from '../public/assets/image/cup.jpg';
import Plate from '../public/assets/image/plate.jpg';
import Phone from '../public/assets/image/phone.jpg';
import Camera from '../public/assets/image/camera.jpg';
import FourBox from '../components/FourBox/FourBox';
import Bluerange from '../public/assets/image/bluerange.jpg';
import Sugar from '../public/assets/image/sugar.jpg';
import Orange2 from '../public/assets/image/orange2.jpg';
import Milk from '../public/assets/image/milk.jpg';
import Cone from '../public/assets/image/cone.jpg';
import { Testimonials } from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Foooter';

export const PageWrapper = styled.div`
  ${flex}
  width: 100vw;
`;

export const Wrapper = styled.div`
  width: 1560px;
`;

export default function Home() {
  return (
    <PageWrapper>
      <Wrapper>
        <HeadTag title="home" description="my description" />
        <Hero />
        <DoubleBox
          image={Lemon}
          header="Transform your brand"
          body="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable."
        />
        <DoubleBoxAlt
          image={Phone}
          header="Stand out to the right audience"
          body="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable."
        />
        <DoubleBoxImage image={Cone} image2={Cup} />
        <Testimonials />
        <FourBox
          image={Juice}
          image2={Plate}
          image3={Bluerange}
          image4={Sugar}
        />
        <Footer />
      </Wrapper>
    </PageWrapper>
  );
}
