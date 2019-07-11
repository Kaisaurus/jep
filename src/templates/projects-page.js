import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Section, Container, Title, Columns, Column } from 'bloomer'
import Layout from '../components/Layout'
import MyHero from '../components/MyHero'
import projectImg1 from '../../public/img/project-gsi-jep-king.jpg'
import projectImgHayashi from '../../public/img/project-hayashi.jpg'
// import projectImgHTB from '../../public/img/project-huis-ten-bosch.jpg'

/*
public/img/project-gsi-jep-king.jpg
public/img/project-gsi-jep-king-2.jpg
public/img/project-hayashi.jpg
public/img/project-huist-ten-bosch
*/

export const ProjectsPageTemplate = ({ image, title, projectsList, king }) => (
  <React.Fragment>
    <MyHero
      title={title}
      isSize="medium"
      bg={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />
    <Container>
      <Section>
        <Title tag="h2" isSize={2}>
          Past Projects
        </Title>
        <Columns>
          <Column>
            <ul>
              <li>
                Connecting the Dutch Horticultural industry to Japanese farmers,
                government and companies.
                <ul className="square">
                  <li>
                    Economic mission to Japan and Korea with Minister Henk Kamp
                    and State Visit to Japan of His Majesty King
                    Willem-Alexander and Her Majesty Queen Máxima - October 2014
                  </li>
                  <li>
                    Visit Minister Hayashi to Holland pavilion at GPEC July 2014
                  </li>
                  <li>
                    Green light for Dutch-Japanese greenhouse in Ishinomaki -
                    May 2014
                  </li>
                  <li>
                    Prime Minister Abe visits the Westland greenhouse area -
                    March 2014
                  </li>
                  <li>
                    Vice Minister of Economic Affairs Mr Akaba visits the
                    Netherlands - May 2014
                  </li>
                  <li>
                    Dutch horticulture trade mission to Japan - October 2013
                  </li>
                  <li>
                    Group of 55 Japanese for study visit to the Netherlands -
                    October 2012
                  </li>
                </ul>
              </li>
            </ul>
          </Column>
          <Column>
            <img src={projectImg1} alt="" />
            {/* <Img fixed={king.childImageSharp.fixed} /> */}
          </Column>
        </Columns>
        <Columns>
          <Column>
            <ul>
              <li>
                Orion/EES: European proposition to Japan for recycling PCB
                <br />
                <a href="http://www.orionun2315.nl/">www.orionun2315.nl</a>
              </li>
              <li>
                Malando Orchestra: reintroducing Malando Orchestra in Japan
                <br />
                <a href="http://www.malando.com/">www.malando.com</a>
              </li>
              <li>
                Health Care Organizations: studytours concerning Alzheimer
                patient care &amp; activities
              </li>
            </ul>
            <ul>
              <li>Television coordination for programs in Japan</li>
              <li>
                KLM: organizing Dutch open, Ladies open, Japan Rising Sun social
                network events for the Japanese market
              </li>
              <li>
                Aweta: export Fruit &amp; Vegatable machines to Japan
                <br />
                <a href="http://www.aweta.com/">www.aweta.com</a>
              </li>
              <li>
                Cono Beemster: export Beemster cheese to Japan
                <br />
                <a href="http://www.cono.nl/">www.cono.nl</a>
              </li>
              <li>
                Huis Ten Bosch: muzikanten
                <br />
                <a href="http://www.huistenbosch.co.jp/">
                  www.huistenbosch.co.jp
                </a>
              </li>
              <li>
                JA Mitsubishi: visit flower auctions &amp; De Ruiter Seeds
                <br />
                <a href="http://www.deruiterseeds.com/">
                  www.deruiterseeds.com
                </a>
              </li>
              <li>
                NHK: documentary-series about Japanese Modern History with
                Japan’s celebrated writer Ryotaro Shiba
                <br />
                <a href="http://www.nhk.or.jp/">www.nhk.or.jp</a>
              </li>
              <li>
                Bugaboo: market research &amp; Trade Fair support
                <br />
                <a href="http://www.bugaboo.com/">www.bugaboo.com</a>
              </li>
              <li>
                Taga: market research &amp; Trade Fair support
                <br />
                <a href="http://www.taga.com/">www.taga.com</a>
              </li>
              <li>Sail Amsterdam: organizing Japan Stage</li>
              <li>
                Huis Ten Bosch, Nagasaki Japan: Coordination for Nihon Sekkei
                (Blue-print of Huis ten Bosch), Japanese Architecture Bureau,
                and for general constructing companies (Shimizu, Kajima,
                Obayashi, Kokudo Kaihatsu, Mitsui Fudosan, Keisetsu) to build
                Huis ten Bosch:, coordination for NHK Enterprises for animity
                facilities in Huis ten Bosch. Coordination for Event Planning
                for Huis ten Bosch and the advicing on the concept of Huis ten
                Bosch. <br />
                <a href="http://www.huistenbosch.co.jp/">
                  www.huistenbosch.co.jp
                </a>
              </li>
              <li>
                Holland Village Japan: the establishment of the Diamond Hall in
                Nagasaki Holland Village and general coordination for Nagasaki
                Holland Village
              </li>
              <li>Coordination Japanese writer Shiba Ryotaro</li>
              <li>
                Organization of social &amp; cultural Holland – Japan events
              </li>
            </ul>
          </Column>
          <Column>
            <img src={projectImgHayashi} alt="" />
          </Column>
        </Columns>
        {/* <ul>
          {projectsList &&
            projectsList.map((project, i) => (
              <a href={project.url} key={i}>
                <li>{project.title}</li>
              </a>
            ))}
        </ul> */}
      </Section>
    </Container>
  </React.Fragment>
)

const ProjectsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectsPageTemplate
        image={frontmatter.image}
        projectsList={frontmatter.projectsList}
        title={frontmatter.title}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  projectsList: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  title: PropTypes.string
}
export default ProjectsPage

/*
public/img/project-gsi-jep-king.jpg
public/img/project-gsi-jep-king-2.jpg
public/img/project-hayashi.jpg
public/img/project-huist-ten-bosch
*/

export const pageQuery = graphql`
  query ProjectsPageTemplate {
    # king: file(relativePath: { eq: "public/img/project-gsi-jep-king.jpg" }) {
    #   childImageSharp {
    #     # Specify the image processing specifications right in the query.
    #     # Makes it trivial to update as your page's design changes.
    #     fixed(width: 125, height: 125) {
    #       ...GatsbyImageSharpFixed
    #     }
    #   }
    # }
    markdownRemark(frontmatter: { templateKey: { eq: "projects-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        projectsList {
          title
          url
        }
      }
    }
  }
`
