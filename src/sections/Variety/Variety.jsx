import { lazy, useMemo, useState } from 'react'
import styled from 'styled-components'

import CakeIcon from 'assets/variety/cake.png'
import BentoIcon from 'assets/variety/bento.png'
import CupcakeIcon from 'assets/variety/cupcake.png'
import HandmadeIcon from 'assets/variety/handmade.png'

const Cake = lazy(() => import('./Cake'))
const Cupcake = lazy(() => import('./Cupcake'))
const Bentocake = lazy(() => import('./Bentocake'))
const Handmade = lazy(() => import('./Handmade'))

const data = ['Торти', 'Бенто торти', 'Кекси', 'Ручна робота']

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`

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
`

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
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

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
    content: '${props => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
`

const Right = styled.div`
  text-align: center;

  @media only screen and (max-width: 768px) {
    height: 60vh;
  }

  @media only screen and (min-width: 768px) {
    flex: 1;
    cursor: pointer;
  }
`

const Image = styled.img`
  height: 100%;
  max-width: 80%;
  object-fit: contain;
`

export const Variety = () => {
  const [active, setActive] = useState(data[Math.floor(Math.random() * data.length)])

  const icon = useMemo(() => {
    const isMobile = window.innerWidth < 768

    switch (active) {
      case 'Торти':
        return isMobile ? <Image src={CakeIcon} alt="cake" loading="lazy" /> : <Cake />
      case 'Кекси':
        return isMobile ? <Image src={CupcakeIcon} alt="cupcake" loading="lazy" /> : <Cupcake />
      case 'Бенто торти':
        return isMobile ? <Image src={BentoIcon} alt="bento" loading="lazy" /> : <Bentocake />
      case 'Ручна робота':
        return isMobile ? <Image src={HandmadeIcon} alt="handmade" loading="lazy" /> : <Handmade />
      default:
        return null
    }
  }, [active])

  return (
    <Section id="variety">
      <Container>
        <Left>
          <List>
            {data.map((item, idx) => {
              return (
                <ListItem
                  key={item}
                  className={item === active ? 'active' : ''}
                  text={item}
                  onMouseEnter={() => setActive(item)}
                >
                  {item}
                </ListItem>
              )
            })}
          </List>
        </Left>

        <Right>{icon}</Right>
      </Container>
    </Section>
  )
}
