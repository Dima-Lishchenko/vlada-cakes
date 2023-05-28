import styled from "styled-components";
import { AnimatedCircle } from "components/AnimatedCircle";

const Section = styled.div`
  scroll-snap-align: start;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    height: 100vh;
    scroll-snap-align: center;
  }
`;

const Container = styled.div`
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
    max-width: 1400px;
  }
`;

const Title = styled.h1`
  font-size: 48px;

  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Circles = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Statistics = () => {
  return (
    <Section id="statistics">
      <Container>
        <Title>Трішки цифр</Title>

        <Circles>
          <AnimatedCircle
            duration={2500}
            value={500}
            label="Готових тортиків"
          />
          <AnimatedCircle
            duration={3000}
            value={2356}
            label="Унікальних замовлень"
          />
          <AnimatedCircle
            duration={3500}
            value={357}
            label="Задоволених клієнтів"
          />
        </Circles>
      </Container>
    </Section>
  );
};
