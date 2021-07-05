import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import choirImage from "../images/choir.jpg"
import homeContent from "../../content/home.yml"

const { newsItems, quotes } = homeContent

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Etusivu" />

    <div className="columns">
      <div className="column is-8">
        <figure className="image mb-5">
          <img src={choirImage} />
        </figure>

        {newsItems.map((item, index) => (
          <div key={index} className="block">
            <h4 className="title is-4 mb-3">{item.title}</h4>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="column is-4">
        <h4 className="subtitle is-4">Meistä sanottua</h4>

        <div className="content">
          {quotes.map((quote: Quote, index: number) => (
            <div key={index} className="box">
              <p>{quote.body}</p>
              <p className="has-text-right">
                {quote.author}, <cite>{quote.publication}</cite>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
