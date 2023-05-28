import styled from "styled-components";

import { ReactComponent as Tel } from "assets/phone.svg";
import { ReactComponent as Delivery } from "assets/delivery.svg";
import { ReactComponent as Time } from "assets/time.svg";
import { ReactComponent as Instagram } from "assets/instagram.svg";

const Section = styled.div`
  scroll-snap-align: start;

  @media only screen and (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 768px) {
    height: 100vh;
    scroll-snap-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
    max-width: 1400px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin-top: 16px;
  font-weight: 200;

  @media only screen and (max-width: 768px) {
    margin-top: 75px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 992px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Link = styled.a`
  color: #da4ea2;
  text-decoration: none;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: white;
    fill: white;

    @media only screen and (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }

  * {
    font-size: 18px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = e.target;
    console.log({ e }, { name, email, message });

    if (!name) return;

    alert(`Дякую, ${name.value}! Ваше повідомлення надіслано.`);
    e.target.reset();
  };

  return (
    <Section id="contacts">
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Зв'язатися з нами</Title>
            <Input placeholder="Ваше ім'я" name="name" required />
            <Input
              placeholder="Ваша імейл адреса"
              name="email"
              type="email"
              required
            />
            <TextArea
              placeholder="Ваше повідомлення..."
              rows={10}
              name="message"
              required
            />
            <Button type="submit">Надіслати</Button>
          </Form>
        </Left>
        <Right>
          <Content>
            <Flex>
              <Tel />
              <Link href="tel:+3800631032050">+38 (063) 103 20 50</Link>
            </Flex>
            <Flex>
              <Tel />
              <Link href="tel:+380981032040">+38 (098) 103 20 40</Link>
            </Flex>

            <Flex>
              <Instagram />
              <Link
                href="https://www.instagram.com/vlada_cake/"
                target="_blank"
              >
                @vlada_cake
              </Link>
            </Flex>

            <br />
            <Flex>
              <Time />
              <p>09:00-20:00</p>
            </Flex>

            <Flex>
              <Delivery />
              <p>Доставка по Броварам</p>
            </Flex>
          </Content>
        </Right>
      </Container>
    </Section>
  );
};
