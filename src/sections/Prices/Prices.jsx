import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slick-slider.sass";

import cake1 from "assets/prices/image1.png";
import cake2 from "assets/prices/image2.png";
import cake3 from "assets/prices/image3.png";
import cake4 from "assets/prices/image4.png";
import cake5 from "assets/prices/image5.png";
import cake6 from "assets/prices/image6.png";
import cake7 from "assets/prices/image7.png";
import cake8 from "assets/prices/image8.png";
import cake9 from "assets/prices/image9.png";
import cake10 from "assets/prices/image10.png";
import cake11 from "assets/prices/image11.png";

const cakesPrices = [
  {
    title: "Вишня в шоколаді",
    price: "600",
    photo: cake1,
  },
  {
    title: "Лате карамель",
    price: "600",
    photo: cake2,
  },
  {
    title: "Торт Снікерс",
    price: "600",
    photo: cake3,
  },
  {
    title: "Полуничний поцілунок",
    price: "600",
    photo: cake4,
  },
  {
    title: "Персик в йогурті",
    price: "600",
    photo: cake5,
  },
  {
    title: "Чорниця - Полуниця",
    price: "650",
    photo: cake6,
  },
  {
    title: "Торт Рафаелло",
    price: "650",
    photo: cake7,
  },
  {
    title: "Шоколадный Бум",
    price: "650",
    photo: cake8,
  },
  {
    title: "Апельсиновий Пломбір",
    price: "650",
    photo: cake9,
  },
  {
    title: "Малиновий Пломбір",
    price: "700",
    photo: cake10,
  },
  {
    title: "Захід Сонця",
    price: "700",
    photo: cake11,
  },
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  margin-bottom: 24px;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;

  @media only screen and (min-width: 768px) {
    width: 85%;
  }
`;

const SliderItem = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    #da4ea2 100%
  );
  border-radius: 24px;
  height: 396px;
  margin: 40px 8px 0 8px;
  padding: 290px 16px 0px 16px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: -30px;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const PriceTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  max-width: 106px;

  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

const PriceCost = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 65px;
  display: flex;

  @media only screen and (min-width: 1024px) {
    font-size: 54px;
  }
`;

const InfoWrapper = styled.div`
  margin-left: 8px;
  margin-top: 8px;
`;

const PriceInfo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    className: "slides123",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {cakesPrices.map((item, idx) => (
          <div key={idx}>
            <SliderItem>
              <Image src={item.photo} />
              <PriceTitle>{item.title}</PriceTitle>
              <PriceCost>
                {item.price}
                <InfoWrapper>
                  <PriceInfo>грн</PriceInfo>
                  <PriceInfo>кг</PriceInfo>
                </InfoWrapper>
              </PriceCost>
            </SliderItem>
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export const Prices = () => {
  return (
    <Section id="price">
      <Title>Прайс</Title>
      <SimpleSlider />
    </Section>
  );
};
