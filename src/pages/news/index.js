import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import MyHero from '../../components/MyHero'

export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <MyHero title={'News'} isSize="medium" bg={'/img/jep-unsplash-6.jpg'} />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
