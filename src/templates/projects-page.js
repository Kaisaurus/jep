import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Section, Container, Title } from 'bloomer'
// Panel
import Layout from '../components/Layout'
import MyHero from '../components/MyHero'

export const ProjectsPageTemplate = ({
  image,
  title,
  pastProjects,
  recentProjects
}) => (
  <React.Fragment>
    <MyHero
      title={title}
      isSize="medium"
      bg={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />

    <Container>
      <Section>
        <Title tag="h2" isSize={2}>
          Recent Projects
        </Title>
        {/* <ul>
          <li>
            <a
              href="http://japan.nlembassy.org/news/2014/07/economic-mission-to-japan-and-korea-with-minister-henk-kamp.html"
              title="Economic mission to Japan and Korea with Minister Henk Kamp"
            >
              Economic mission to Japan and Korea with Minister Henk Kamp
            </a>{' '}
            and{' '}
            <a
              href="http://japan.nlembassy.org/news/2014/08/state-visit-to-japan-of-his-majesty-king-willem-alexander-of-the-netherlands-and-her-majesty-queen-maxima.html"
              title="State Visit to Japan of His Majesty King Willem-Alexander and Her Majesty Queen Máxima"
            >
              State Visit to Japan of His Majesty King Willem-Alexander and Her
              Majesty Queen Máxima
            </a>
            &nbsp;October 2014
          </li>
          <li>
            <a
              href="http://japan.nlembassy.org/news/2014/07/bezoek-minister-hayashi-aan-holland-paviljoen-op-gpec-copy.html"
              title="Visit Minister Hayashi to Holland pavilion at GPEC"
            >
              Visit Minister Hayashi to Holland pavilion at GPEC
            </a>{' '}
            July 2014
          </li>
          <li>
            <a
              href="http://japan.nlembassy.org/news/2014/05/green-light-for-dutch---japanese-greenhouse-in-ishinomaki.html"
              title="Green light for Dutch - Japanese greenhouse in Ishinomaki"
            >
              Green light for Dutch-Japanese greenhouse in Ishinomaki
            </a>
            &nbsp;May 2014
          </li>
          <li>
            <a
              href="http://japan.nlembassy.org/news/2014/03/prime-minister-abe-visits-the-westland-greenhouse-area.html"
              title="Prime Minister Abe visits the Westland greenhouse area"
            >
              Prime Minister Abe visits the Westland greenhouse area
            </a>
            &nbsp;March 2014
          </li>
          <li>
            <a
              href="http://www.hortidaily.com/article/8437/Go-ahead-for-Dutch-Japanese-horticultural-company"
              title=" Vice Minister of Economic Affairs visits Valstar"
            >
              Vice Minister of Economic Affairs Mr Akaba visits the Netherlands
            </a>
            &nbsp;May 2014
          </li>
          <li>
            <a
              href="http://japan.nlembassy.org/news/2013/10/horticultural-trade-mission.html"
              title="Dutch horticulture trade mission to Japan 2013"
            >
              Dutch horticulture trade mission to Japan{' '}
            </a>
            October 2013
          </li>
          <li>
            <a
              href="http://japan.nlambassade.org/nieuws/2012/11/japanse-tuinbouwdelegatie-bezocht-nederland.html"
              title="Group of 55 Japanese for study visit to the Netherlands"
            >
              Group of 55 Japanese for&nbsp;study visit to the Netherlands
            </a>
            &nbsp;October 2012
          </li>
         */}
        <ul>
          {recentProjects &&
            recentProjects.map((project, i) => (
              <a href="url" key={i}>
                <li>{project.title}.title</li>
              </a>
            ))}
          {/* {recentProjects} */}
        </ul>
      </Section>

      <Section>
        <Title tag="h2" isSize={2}>
          Past Projects
        </Title>
        <ul>
          {pastProjects &&
            pastProjects.map((project, i) => (
              <a href="url" key={i}>
                <li>{project.title}.title</li>
              </a>
            ))}
        </ul>
        {/*
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
            <a href="http://www.huistenbosch.co.jp/">www.huistenbosch.co.jp</a>
          </li>
          <li>
            JA Mitsubishi: visit flower auctions &amp; De Ruiter Seeds
            <br />
            <a href="http://www.deruiterseeds.com/">www.deruiterseeds.com</a>
          </li>
          <li>
            NHK: documentary-series about Japanese Modern History with Japan’s
            celebrated writer Ryotaro Shiba
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
            (Blue-print of Huis ten Bosch), Japanese Architecture Bureau, and
            for general constructing companies (Shimizu, Kajima, Obayashi,
            Kokudo Kaihatsu, Mitsui Fudosan, Keisetsu) to build Huis ten Bosch:,
            coordination for NHK Enterprises for animity facilities in Huis ten
            Bosch. Coordination for Event Planning for Huis ten Bosch and the
            advicing on the concept of Huis ten Bosch.{' '}
            <a href="http://www.huistenbosch.co.jp/">www.huistenbosch.co.jp</a>
          </li>
          <li>
            Holland Village Japan: the establishment of the Diamond Hall in
            Nagasaki Holland Village and general coordination for Nagasaki
            Holland Village
          </li>
          <li>
            Commencement of full-scale coordination for Japanese mass media
          </li>
          <li>Coordination Japanese writer Shiba Ryotaro</li>
          <li>Organization of social &amp; cultural Holland – Japan events</li>
        */}
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
        recentProjects={frontmatter.recentProjects}
        pastProjects={frontmatter.pastProjects}
        title={frontmatter.title}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  recentProjects: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  pastProjects: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  title: PropTypes.string
}
export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsPageTemplate {
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
        recentProjects {
          title
          url
        }
        pastProjects {
          title
          url
        }
      }
    }
  }
`
