import styled from "styled-components";

import { ReactComponent as Tel } from "assets/phone.svg";
import Icon from "assets/logo.jpeg";

const Section = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(3px);
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  @media only screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
    max-width: 1400px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  border-radius: 50%;
  color: white;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    gap: 25px;
  }
`;

const ListItem = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &:hover:after {
    transform: scaleX(1);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    display: block;
    right: 0;
    left: 0;
    height: 1px;
    transform: scaleX(0);
    transform-origin: center center;
    transition: transform 0.2s cubic-bezier(0.2, 0, 0.4, 1);
    background-color: currentColor;
  }
`;

const Telephone = styled.div`
  display: flex;
  align-items: center;
  width: 185px;

  img {
    height: 30px;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={Icon} />
          <List>
            <ListItem href="#hero">Головна</ListItem>
            <ListItem href="#variety">Продукція</ListItem>
            <ListItem href="#price">Прайс</ListItem>
            <ListItem href="#gallery">Галерея</ListItem>
            <ListItem href="#statistics">Статистика</ListItem>
            <ListItem href="#contacts">Зв'язатись</ListItem>
          </List>
        </Links>

        <Telephone>
          <Tel style={{ height: 25, width: 25 }} />
          &nbsp;&nbsp;
          <a href="tel:+3800631032050">+38 (063) 103 20 50</a>
        </Telephone>
      </Container>
    </Section>
  );
};

export default Navbar;
