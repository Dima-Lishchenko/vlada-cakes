import styled from "styled-components";

import {
  Contacts,
  Hero,
  Gallery,
  Variety,
  Statistics,
  Prices,
} from "./sections";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scrollbar-width: none;
  color: white;
  scroll-snap-stop: always;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container id="container">
      <Hero />
      <Variety />
      <Prices />
      <Gallery />
      <Statistics />
      <Contacts />
    </Container>
  );
}

export default App;
