import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import image from '../../static/img/jep-unsplash-5.jpg' //5 or 2
import MyHero from '../components/MyHero'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <MyHero
        title={title}
        isSize="medium"
        bg={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      />
      <div className="container">
        <div className="section">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </React.Fragment>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post)
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      frontmatter {
        title
        # recentProjects
        # pastProjects
      }
    }
  }
`
