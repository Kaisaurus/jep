import React from 'react'
import { Footer, Container, Content } from 'bloomer'
import Link from 'gatsby-link'

const MyFooter = () => {
  return (
    <Footer>
      <Container>
        <Content isSize="small" hasTextAlign="centered">
          <p>Copyright Japan Euro Promotions</p>
          <p>
            <Link to="/">Home</Link>&nbsp;-&nbsp;
            <Link to="/about">About</Link>&nbsp;-&nbsp;
            <Link to="/news">News</Link>&nbsp;-&nbsp;
            <Link to="/projects">Projects</Link>&nbsp;-&nbsp;
            <Link to="/contact">Contact</Link>
          </p>
        </Content>
      </Container>
    </Footer>
  )
}

export default MyFooter
