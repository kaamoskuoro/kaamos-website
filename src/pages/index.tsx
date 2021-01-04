import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import choir from "../images/choir.jpg"
import quotes from "../../data/quotes.yaml"

interface Quote {
  body: string
  author: string
  publication: string
}

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Etusivu" />

    <figure className="image mb-5">
      <img src={choir} />
    </figure>
    <div className="content">
      {quotes.map((quote: Quote) => (
        <div className="box">
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
