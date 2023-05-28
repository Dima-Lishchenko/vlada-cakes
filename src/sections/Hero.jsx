import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import styled from "styled-components";

import Navbar from "components/Navbar";
import InstagramLink from "components/InstagramLink";

import Owner from "assets/vlada.jpg";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    scroll-snap-align: start;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
    max-width: 1400px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 48px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    font-size: 16px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 400px;
  border-radius: 30px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

export const Hero = () => {
  return (
    <Section id="hero">
      <Navbar />
      <Container>
        <Left>
          <Title>Твій Ідеальний Десерт</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Про мене</Subtitle>
          </WhatWeDo>
          <Desc>
            Привіт, мене звати Влада, я кондитер з досвідом 5 років. Мій профіль
            - це оригінальні та креативні солодощі, які хочеться фотографувати,
            та ще більше - одразу ж спробувати. Зроблю десерт для будь-якої
            події - усіляких свят, дитячих вечірок, весіль. <br />
            <br /> Кожен торт готується спеціально для вас, по індивідуальному
            дизайну. В каталозі ви можете обрати смак, на ваш вибір - 11
            найсмачніших варіантів начинки. Ви точно знайдете для себе ідеальний
            торт!
          </Desc>
          <InstagramLink />
        </Left>
        <Right>
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src={Owner} />
        </Right>
      </Container>
    </Section>
  );
};
