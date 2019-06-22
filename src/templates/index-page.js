import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Section, Columns, Column, Container, Title } from 'bloomer'
import Layout from '../components/Layout'
import MyHero from '../components/MyHero'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({ image, title, intro }) => (
  <React.Fragment>
    <MyHero
      title={title}
      isSize="medium"
      bg={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />
    <Section>
      <Container>
        <Columns isVCentered>
          <Column hasTextAlign="centered" isSize="1/3">
            <Title tag="h2" isSize={2}>
              {intro.jp.title}
            </Title>
          </Column>
          <Column>{intro.jp.body}</Column>
        </Columns>
        <Columns isVCentered>
          <Column>{intro.en.body}</Column>
          <Column hasTextAlign="centered" isSize="1/3">
            <Title tag="h2" isSize={2}>
              {intro.en.title}
            </Title>
          </Column>
        </Columns>
      </Container>
      <Container>
        <BlogRoll />
      </Container>
    </Section>
  </React.Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.object
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array
  // })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          en {
            title
            body
          }
          jp {
            title
            body
          }
        }
      }
    }
  }
`
