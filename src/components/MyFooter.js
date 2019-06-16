import React from 'react'
import { Footer, Container, Content } from 'bloomer'
// import styled from 'styled-components'
import Link from 'gatsby-link'

// const StickyFooter = styled(Footer)`
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `

const MyFooter = () => {
  return (
    <Footer>
      <Container>
        <Content isSize="small" hasTextAlign="centered">
          <p>Copyright Japan Euro Promotions</p>
          <p>
            <Link to="/">Home</Link> - <Link to="/contact">Contact</Link>
          </p>
        </Content>
      </Container>
    </Footer>
  )
}

export default MyFooter
