import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ensembleImage from "../images/ensemble.jpg"

const TilaaLaulua: React.FC = () => (
  <Layout>
    <SEO title="Hea kuoroon" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Tilaa laulua! [temp]</h3>

        <p className="block">
          Tälle sivulle päivitetään infoa Kaamoksen tulevista koelauluista!
        </p>

        <img src={ensembleImage} className="block" />

      </div>
    </div>
  </Layout>
)

export default TilaaLaulua
