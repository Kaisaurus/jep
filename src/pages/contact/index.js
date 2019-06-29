import React from 'react'
import Layout from '../../components/Layout'
import { Section, Container, Columns, Column } from 'bloomer'
import MyHero from '../../components/MyHero'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <MyHero
          title={'How to reach us'}
          isSize="medium"
          bg={`/img/jep-unsplash-4.jpg`}
        />
        <Container>
          <Section>
            <Columns>
              <Column>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5948916199964!2d4.890063051654646!3d52.3777652796883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c89c99667f%3A0x91939a00b75b14c1!2sSingel+60%2C+1015+AB+Amsterdam!5e0!3m2!1sen!2snl!4v1560342923049!5m2!1sen!2snl"
                  width="600"
                  height="600"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </Column>
              <Column>
                Singel 60
                <br />
                1015 AB Amsterdam
                <br />
                The Netherlands
                <br />
                Tel : +31 (0)20-5289800
                <br />
                Fax : +31(0)20-3206384
                <br />
                E: info[at]jep.nl
                <br />
                KvK-nummer: 60268379
                <br />
                BTW-nummer:NL853835780B01
              </Column>
            </Columns>
          </Section>
        </Container>
      </Layout>
    )
  }
}
