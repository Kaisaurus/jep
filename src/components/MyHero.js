import React from 'react'
import { Title, Hero, HeroBody } from 'bloomer'
import styled from 'styled-components'

const HeroTitle = styled(Title)`
  display: inline-block;
  /* width: 100%; */
  /* max-width: 700px; */
  /* padding: 0.1em; */
  /* line-height: 1.3em; */
`

const MyHero = ({ title, isSize, isColor = 'info', bg, bgColor }) => {
  const HeroWithBg = styled(Hero)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.01)),
      url(${bg});
    background-size: cover;
  `

  return (
    <HeroWithBg isColor={isColor} isSize={isSize}>
      <HeroBody
        style={{
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        {title && (
          <HeroTitle
            isSize={1}
            className="primary-bg"
            style={{
              padding: '1rem 0'
            }}
          >
            {title}
          </HeroTitle>
        )}
      </HeroBody>
    </HeroWithBg>
  )
}

export default MyHero
