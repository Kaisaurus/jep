import React from 'react'
import { Footer, Container, Section } from 'bloomer'
import Link from 'gatsby-link'
import logoGSI from '../img/logo-gsi.png'
import logoJiro from '../img/logo-jiro.png'

const MyFooter = () => {
  return (
    <Footer>
      <Container className="footer-links">
        <Section hasTextAlign="centered">
          <Link to="/">Home</Link>&nbsp;-&nbsp;
          <Link to="/about">About</Link>&nbsp;-&nbsp;
          <Link to="/news">News</Link>&nbsp;-&nbsp;
          <Link to="/projects">Projects</Link>&nbsp;-&nbsp;
          <Link to="/contact">Contact</Link>
        </Section>
        <Section hasTextAlign="centered" className="footer-logos">
          <p className="partner-text">Japan Euro Promotions is a partner of:</p>

          <a
            href="http://greensquare.international/"
            title="GreenSquare International"
          >
            <img src={logoGSI} alt="GreenSquare International" />
          </a>
          <a
            href="http://jiro-arts-foundation.org/"
            title="Jiro Arts Foundation"
          >
            <img src={logoJiro} alt="Jiro Arts Foundation" />
          </a>
        </Section>
      </Container>
    </Footer>
  )
}

export default MyFooter
