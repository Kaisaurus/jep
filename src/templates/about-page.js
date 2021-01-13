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
          <Columns>
            <Column>            
              <ul>
                <li>1971 Moved to the Netherlands</li>
                <li>1976 World Certified Gemnologist, establishment Goto Trading Company offering diamond expertise and trade in Antwerp</li>
                <li>1982 Japan Euro Promotions founded for cultural and business exchange, organizing cultural exchange events</li>
                <li>1983 Building &nbsp; Coordinating Dutch museums in Nagasaki Holland Village</li>
                <li>1989 Ryotaro Shiba "Travel in the Netherlands"</li>
                <li>1992 Opening Nagasaki Huis ten Bosch Japan</li>
                <li>2011 Started full-scale support for Japanese agriculture with support for the Great East Japan Earthquake, event organization KLM, Consultant to Orion, Aweta and EES</li>
                <li>2014 Establishment of Green Square International, consultant to Vijverberg Advies Japan, Haakman Flowerbulbs, NEM HRSG, Miyagi Prefecture Global Business Advisor</li>
                <li>2015 to present Coordination of study tours on Agriculture, Welfare and Health Care in The Netherlands</li>
              </ul>
            </Column>
            <Column>
              <ul>
                <li>1971年 オランダ在住</li>
                <li>1976年 宝石鑑定士・後藤貿易会社</li>
                <li>1982年 ジャパン・ユーロ・プロモーションズ創立</li>
                <li>1983年 長崎オランダ村オープン</li>
                <li>1988年 司馬遼太郎「明治創生期“太郎の国の物語”」</li>
                <li>1989年 司馬遼太郎「街道をゆく“オランダ紀行”」</li>
                <li>1992年 長崎ハウステンボスオープン</li>
                
              </ul>
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
