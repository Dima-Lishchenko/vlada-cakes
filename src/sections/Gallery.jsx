import styled from "styled-components";

const posts = [
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/1.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Бенто 1кг\n" +
      "Вишня Шоколад\n" +
      "\n" +
      "#sweetday #lovecake #happyday #cake #happy #sweet #cakes #bento #happybirthday #twins #heart #cherrychocolate #cherry #chokolate #strawberry #blueberry #kinder",
    link: "https://www.instagram.com/p/CqTdpIqNR-6/",
  },
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/2.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Капкейки\n" +
      "10шт\n" +
      "Шоколад та карамель 🍫\n" +
      "\n" +
      "#cupcakes #strawberry #chokolate #vanilla #happyday #swet #sweetday #lovesweets #spring #kitkat #tasty #berries",
    link: "https://www.instagram.com/p/Cq5PnS-teXf/",
  },
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/3.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Шоко Бум 2кг\n" +
      "🍫\n" +
      "\n" +
      "#торт #тортики #торти #смачно #спайдермен #кондитер #вашкондитер #яскраво #павук #солодке #солодко #зднемнародження #діти #шоколад #шоколаднийторт #орео #нутелла #кіндер #4 #happyday #sweetcake #swet #chokolate #spiderman #cakespiderman #happybirthday #spider #oreo #nutella #kinder",
    link: "https://www.instagram.com/p/Cr0nseJtos3/",
  },
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/4.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Бенто Тортик\n" +
      "0.5кг\n" +
      "Банан в Карамелі\n" +
      "\n" +
      "#Бенто #бентоторт #бентотортик #бенто #торт #тортики #торти #тородел #тортикиназаказ #вашкондитер #кондитер #кондитерская #кондитерская #зднемнародження #смачнийторт #смакота #смачно #солодке #сололкийподарунок #солоденьке #солодкийдень",
    link: "https://www.instagram.com/p/CsqONB6Nnsa/",
  },
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/5.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Бенто Тортик\n" +
      "1кг\n" +
      "Вишня Ваніль\n" +
      "\n" +
      "#торт #тортик #тортики #тородел #кондитер #кондитерська #вашкондитер #солодке #сололкийподарунок #солодкийдень #солодкежиття #солодощі #солоденьке #вишняваніль #принцесса #Бенто #бентотортик #бентоторт #зднемнародження #червоний",
    link: "https://www.instagram.com/p/CsnyE4Htxyl/",
  },
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/6.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Бенто Тортик\n" +
      "0.5кг\n" +
      "Шоколад 🍫\n" +
      "\n" +
      "#торт #тортики #торти #гумор #весело #зднемнародження #тортик #кондитер #вашкондитер #смакота #смачно #смачнийторт #ніжно #мама #мамі #матусіукраїни #матуся #мамусі #Бенто #бентоторт #бенто #шоколад #ням #підзамовлення #солодкежиття #солодке #солоденьке #смачненьке #серденько #сердце",
    link: "https://www.instagram.com/p/CsOBYgKN2IC/",
  },
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/7.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Бенто Тортик\n" +
      "0.5кг\n" +
      "Ваніль Полуниця\n" +
      "\n" +
      "#бентоторт #Бенто #бенто #бентотортик #солодке #солодкийдень #солодкежиття #солодко #кондитер #вашкондитер #гусь #ваніль #полуниця #зднемнародження #смачнийторт #смакота #смачно #35 #гумор #смішно",
    link: "https://www.instagram.com/p/CsI96XNtAbG/",
  },
  {
    img: (
      <img
        loading="lazy"
        src={require("../assets/gallery/8.jpeg")}
        alt="cake"
      />
    ),
    title:
      "Великдень закінчився ,\n" +
      "а я ще с Пасками ні )😅\n" +
      "Захотілось ще посмакувати солоденького та смачненького 😋\n" +
      "\n" +
      "#spring #holiday #sweetday #swet #chokolate #easter #loveday #delicious\n" +
      "#sweetness #dough #bake\n" +
      "#солодкежиття #солодко #великдень #паска а #смачно #ніжно #гарно #кондитер #вашкондитер",
    link: "https://www.instagram.com/p/Crai_AFt0zM/",
  },
];

const Section = styled.div`
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  position: relative;

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

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 48px;

  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Post = styled.div``;

const Link = styled.a`
  display: block;
  margin-top: 8px;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const Photo = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 16px 24px 0 rgba(48, 49, 51, 0.35),
      0 0 1px 0 rgba(48, 49, 51, 0.05);
  }

  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media only screen and (min-width: 475px) {
    height: 200px;
    width: 200px;
  }

  @media only screen and (min-width: 1280px) {
    height: 250px;
    width: 250px;
  }
  @media only screen and (min-width: 1500px) {
    height: 300px;
    width: 300px;
  }
`;

export const Gallery = () => {
  return (
    <Section id="gallery">
      <Container>
        <Title>Галерея</Title>
        <Wrapper>
          {posts.map((post, idx) => (
            <Post key={idx}>
              <Link href={post.link} title={post.title} target="_blank">
                <Photo>{post.img}</Photo>
              </Link>
            </Post>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};
