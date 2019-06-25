import React from 'react'
import { Title, Hero, HeroBody } from 'bloomer'
import styled from 'styled-components'

const MyHero = ({ title, isSize, isColor = 'dark', bg }) => {
  const HeroWithBg = styled(Hero)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.01)),
      url(${bg});
    background-color: #c33;
    background-size: cover;
  `
  const HeroBodyCentered = styled(HeroBody)`
    justify-content: center;
    text-align: center;
  `
  const HeroTitle = styled(Title)`
    display: inline-block;
    padding: 0.5em 0.5em;
  `

  return (
    <HeroWithBg isColor={isColor} isSize={isSize}>
      <HeroBodyCentered>
        {title && (
          <HeroTitle isSize={1} className="primary-bg">
            {title}
          </HeroTitle>
        )}
      </HeroBodyCentered>
    </HeroWithBg>
  )
}

export default MyHero
