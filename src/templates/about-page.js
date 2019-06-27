import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import image from '../../static/img/jep-unsplash-5.jpg' //5 or 2
import MyHero from '../components/MyHero'
import { Section, Container, Title, Columns, Column } from 'bloomer'

export const AboutPageTemplate = ({
  title,
  content
  // intro = 'none',
  // profile = 'none',
}) => {
  return (
    <React.Fragment>
      <MyHero
        title={title}
        isSize="medium"
        bg={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      />
      <Container>
        <Section>
          <Columns>
            <Column>
              <Title>{content.intro.en.title}</Title>
              <p>{content.intro.en.body}</p>
            </Column>
            <Column>
              <Title>{content.intro.jp.title}</Title>
              <p>{content.intro.jp.body}</p>
            </Column>
          </Columns>
          <Columns>
            <Column>
              <Title>{content.profile.en.title}</Title>
              <p>{content.profile.en.body}</p>
            </Column>
            <Column>
              <Title>{content.profile.jp.title}</Title>
              <p>{content.profile.jp.body}</p>
            </Column>
          </Columns>
        </Section>
      </Container>
    </React.Fragment>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title || ''}
        content={post.frontmatter.content}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        content {
          intro {
            jp {
              title
              body
            }
            en {
              title
              body
            }
          }
          profile {
            jp {
              title
              body
            }
            en {
              title
              body
            }
          }
        }
      }
    }
  }
`
