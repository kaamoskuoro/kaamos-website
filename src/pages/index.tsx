import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import choirImage from "../images/choir.jpg"
import homeContent from "../../content/home.yml"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Etusivu" />

    <figure className="image mb-5">
      <img src={choirImage} />
    </figure>
    <div className="content">
      {homeContent.quotes.map((quote: Quote, index: number) => (
        <div key={index} className="box">
          <p>{quote.body}</p>
          <p className="has-text-right">
            {quote.author}, <cite>{quote.publication}</cite>
          </p>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage
