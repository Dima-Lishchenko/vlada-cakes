import { useMemo, useState } from "react";
import styled from "styled-components";

import { Cake } from "./Cake";
import { Cupcake } from "./Cupcake";
import { Bentocake } from "./Bentocake";
import { Handmade } from "./Handmade";

const data = ["Торти", "Бенто торти", "Кекси", "Ручна робота"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
    max-width: 1400px;
    justify-content: space-between;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-top: 70px;
    padding: 20px;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    flex: 1;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 48px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 65px;
  }

  @media only screen and (min-width: 1500px) {
    font-size: 90px;
  }

  &.active,
  :hover {
    &:after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Right = styled.div`
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    height: 60vh;
  }

  @media only screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const Variety = () => {
  const [active, setActive] = useState(
    data[Math.floor(Math.random() * data.length)]
  );

  const icon = useMemo(() => {
    switch (active) {
      case "Торти":
        return <Cake />;
      case "Кекси":
        return <Cupcake />;
      case "Бенто торти":
        return <Bentocake />;
      case "Ручна робота":
        return <Handmade />;
      default:
        return <Cake />;
    }
  }, [active]);

  return (
    <Section id="variety">
      <Container>
        <Left>
          <List>
            {data.map((item, idx) => {
              return (
                <ListItem
                  key={item}
                  className={item === active ? "active" : ""}
                  text={item}
                  onMouseEnter={() => setActive(item)}
                >
                  {item}
                </ListItem>
              );
            })}
          </List>
        </Left>

        <Right>{icon}</Right>
      </Container>
    </Section>
  );
};
