import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ensembleImage from "../images/ensemble.jpg"

const HaeKuoroon: React.FC = () => (
  <Layout>
    <SEO title="Hea kuoroon" />

    <div className="columns">
      <div className="column is-8">
        <h3 className="title is-3">Hae Kuoroon</h3>

        <p className="block">
          Kiinnostuneita pyydetään ilmoittautumaan johtaja Visa Yrjölälle osoitteeseen visa.yrjola@gmail.com. Kerro viestissä äänialasi sekä musiikkitaustasi. Koelauluajankohta sovitaan erikseen ilmoittautuneiden kanssa. Kuoro harjoittelee tiistai-iltaisin Mikael Agricolan kirkossa.<br></br>Nähdään koelauluissa!
        </p>

        <img src={ensembleImage} className="block" />

      </div>
    </div>
  </Layout>
)

export default HaeKuoroon
